import fs from "node:fs/promises";
import path from "node:path";
import crypto from "node:crypto";

const academyHtmlPath = "/Users/giahuyhoangle/website_clone/chaseglobalacademy.com/index.html";
const academyRoot = "/Users/giahuyhoangle/website_clone/chaseglobalacademy.com";
const projectRoot = process.cwd();

const academyAssetsRoot = path.join(projectRoot, "public", "assets", "academy");
const manifestPath = path.join(academyAssetsRoot, "asset-manifest.json");
const mapDocPath = path.join(projectRoot, "docs", "academy-asset-map.md");

const folderConfig = [
  "images/hero",
  "images/countries",
  "images/partners",
  "images/certifications",
  "images/testimonials",
  "images/services",
  "images/misc",
  "icons",
  "logos",
  "styles",
  "scripts"
];

const allowedExt = new Set([
  ".png",
  ".jpg",
  ".jpeg",
  ".webp",
  ".svg",
  ".gif",
  ".ico",
  ".css",
  ".js",
  ".woff",
  ".woff2",
  ".ttf",
  ".eot",
  ".mp4",
  ".webm"
]);

function extractUrls(content) {
  const found = new Set();
  const attrRegex = /\b(?:src|href)=["']([^"']+)["']/gi;
  const cssRegex = /url\((["']?)([^)"']+)\1\)/gi;
  for (const match of content.matchAll(attrRegex)) found.add(match[1]);
  for (const match of content.matchAll(cssRegex)) found.add(match[2]);
  return [...found];
}

function normalizeRef(ref) {
  return ref.trim().replace(/&amp;/g, "&");
}

function pickSection(ref) {
  const lower = ref.toLowerCase();
  if (/\.(css)$/i.test(lower)) return "styles";
  if (/\.(js)$/i.test(lower)) return "scripts";
  if (/(logo|brand|chase_global|chase-global)/i.test(lower)) return "logos";
  if (/(flag|canada|usa|australia|germany|france|spain|netherlands|country)/i.test(lower)) return "images/countries";
  if (/(testimon|review|client)/i.test(lower)) return "images/testimonials";
  if (/(cert|certificate|credential|recognition|rcic|capic|usatc)/i.test(lower)) return "images/certifications";
  if (/(partner|ucw|bsbi|ue-amsterdam|university|institution)/i.test(lower)) return "images/partners";
  if (/(service|ielts|toefl|duolingo|exam|scholar|career|internship)/i.test(lower)) return "images/services";
  if (/(hero|slide|banner|bg-slide)/i.test(lower)) return "images/hero";
  if (/(icon)/i.test(lower)) return "icons";
  return "images/misc";
}

function semanticBaseName(ref) {
  const clean = ref.split("#")[0].split("?")[0];
  const urlLike = clean.startsWith("http://") || clean.startsWith("https://");
  const baseRaw = urlLike ? path.basename(new URL(clean).pathname) : path.basename(clean);
  const baseNoExt = baseRaw.replace(/\.[^.]+$/, "");
  const safe = baseNoExt
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
  return safe || "asset";
}

function extFromRef(ref) {
  const clean = ref.split("#")[0].split("?")[0];
  if (clean.startsWith("http://") || clean.startsWith("https://")) {
    return path.extname(new URL(clean).pathname).toLowerCase() || ".bin";
  }
  return path.extname(clean).toLowerCase() || ".bin";
}

function fileType(ext) {
  if ([".css"].includes(ext)) return "style";
  if ([".js"].includes(ext)) return "script";
  if ([".woff", ".woff2", ".ttf", ".eot"].includes(ext)) return "font";
  if ([".mp4", ".webm"].includes(ext)) return "video";
  return "image";
}

async function ensureFolders() {
  await fs.mkdir(academyAssetsRoot, { recursive: true });
  for (const folder of folderConfig) {
    await fs.mkdir(path.join(academyAssetsRoot, folder), { recursive: true });
  }
  await fs.mkdir(path.join(projectRoot, "docs"), { recursive: true });
}

async function readLocalAsset(ref) {
  const raw = normalizeRef(ref);
  const candidates = [
    raw,
    decodeURIComponent(raw),
    raw.replace(/%3F/gi, "?")
  ]
    .map((v) => v.replace(/^\.\//, "").replace(/^\//, ""))
    .filter(Boolean);

  for (const rel of candidates) {
    const abs = path.join(academyRoot, rel);
    try {
      const data = await fs.readFile(abs);
      return { data, originalPath: rel };
    } catch {
      // continue
    }
  }
  return null;
}

async function readRemoteAsset(url) {
  const res = await fetch(url, { redirect: "follow" });
  if (!res.ok) return null;
  const data = Buffer.from(await res.arrayBuffer());
  if (!data.length) return null;
  return { data };
}

async function main() {
  await ensureFolders();
  const html = await fs.readFile(academyHtmlPath, "utf8");
  const refs = extractUrls(html).map(normalizeRef);

  const manifest = [];
  const nameCounter = new Map();

  for (const ref of refs) {
    if (!ref || ref.startsWith("data:") || ref.startsWith("#") || ref.startsWith("mailto:") || ref.startsWith("tel:")) continue;
    const ext = extFromRef(ref);
    if (!allowedExt.has(ext)) continue;

    const section = pickSection(ref);
    const folder = path.join(academyAssetsRoot, section);
    const base = semanticBaseName(ref);
    const key = `${section}/${base}${ext}`;
    const count = nameCounter.get(key) ?? 0;
    nameCounter.set(key, count + 1);
    const suffix = count === 0 ? "" : `-${count + 1}`;
    const filename = `${base}${suffix}${ext}`;
    const relOutput = `/assets/academy/${section}/${filename}`;
    const absOutput = path.join(folder, filename);

    let data;
    let originalPath = "";

    if (/^https?:\/\//i.test(ref)) {
      const remote = await readRemoteAsset(ref);
      if (!remote) continue;
      data = remote.data;
    } else {
      const local = await readLocalAsset(ref);
      if (!local) continue;
      data = local.data;
      originalPath = local.originalPath;
    }

    await fs.writeFile(absOutput, data);

    manifest.push({
      sourceUrl: /^https?:\/\//i.test(ref) ? ref : "",
      originalPath,
      sourceRef: ref,
      newPath: relOutput,
      section,
      type: fileType(ext),
      notes: ""
    });
  }

  manifest.sort((a, b) => a.newPath.localeCompare(b.newPath));
  await fs.writeFile(manifestPath, JSON.stringify(manifest, null, 2));

  const bySection = manifest.reduce((acc, item) => {
    acc[item.section] = acc[item.section] || [];
    acc[item.section].push(item);
    return acc;
  }, {});

  let md = "# Academy Asset Map\n\n";
  md += `Total assets: ${manifest.length}\n\n`;
  for (const section of Object.keys(bySection).sort()) {
    md += `## ${section}\n\n`;
    for (const item of bySection[section]) {
      md += `- \`${item.newPath}\` <- \`${item.sourceRef}\`\n`;
    }
    md += "\n";
  }
  await fs.writeFile(mapDocPath, md);

  console.log(`Academy assets organized: ${manifest.length}`);
  console.log(`Manifest: ${manifestPath}`);
  console.log(`Map doc: ${mapDocPath}`);
}

main();
