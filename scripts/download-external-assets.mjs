import fs from "node:fs/promises";
import path from "node:path";
import crypto from "node:crypto";

const projectRoot = process.cwd();
const sourceFiles = [
  "/Users/giahuyhoangle/website_clone/chaseglobalacademy.com/index.html",
  "/Users/giahuyhoangle/website_clone/chaseglobalimmigration.ca/home/index.html"
];

const outputDir = path.join(projectRoot, "public", "assets", "external");
const manifestPath = path.join(projectRoot, "public", "assets", "external-manifest.json");

function extractUrls(content) {
  const found = new Set();
  const attrRegex = /\b(?:src|href)=["'](https?:\/\/[^"']+)["']/gi;
  const cssRegex = /url\(["']?(https?:\/\/[^)"']+)["']?\)/gi;

  for (const match of content.matchAll(attrRegex)) found.add(match[1]);
  for (const match of content.matchAll(cssRegex)) found.add(match[1]);

  return [...found];
}

function extensionFromUrl(rawUrl) {
  const clean = rawUrl.split("#")[0].split("?")[0];
  const ext = path.extname(new URL(clean).pathname).toLowerCase();
  return ext || ".bin";
}

function isDownloadable(url) {
  return /\.(css|js|png|jpg|jpeg|webp|svg|gif|ico|woff|woff2|ttf|eot|mp4|webm)$/i.test(url);
}

async function main() {
  await fs.mkdir(outputDir, { recursive: true });

  const urls = new Set();
  for (const filePath of sourceFiles) {
    const content = await fs.readFile(filePath, "utf8");
    for (const url of extractUrls(content)) {
      if (isDownloadable(url)) urls.add(url);
    }
  }

  const manifest = {};
  let downloaded = 0;
  let skipped = 0;

  for (const url of urls) {
    try {
      const res = await fetch(url, { redirect: "follow" });
      if (!res.ok) {
        skipped += 1;
        continue;
      }

      const bytes = Buffer.from(await res.arrayBuffer());
      if (!bytes.length) {
        skipped += 1;
        continue;
      }

      const ext = extensionFromUrl(url);
      const hash = crypto.createHash("sha1").update(url).digest("hex").slice(0, 16);
      const filename = `${hash}${ext}`;
      const absOut = path.join(outputDir, filename);
      await fs.writeFile(absOut, bytes);
      manifest[url] = `/assets/external/${filename}`;
      downloaded += 1;
    } catch {
      skipped += 1;
    }
  }

  await fs.writeFile(manifestPath, JSON.stringify(manifest, null, 2));
  console.log(`External links found: ${urls.size}`);
  console.log(`Downloaded: ${downloaded}`);
  console.log(`Skipped: ${skipped}`);
  console.log(`Manifest: ${manifestPath}`);
}

main();
