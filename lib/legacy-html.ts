import fs from "node:fs/promises";
import path from "node:path";

type SourceSite = "academy" | "immigration";

const sourceHtmlPaths: Record<SourceSite, string> = {
  academy: "/Users/giahuyhoangle/website_clone/chaseglobalacademy.com/index.html",
  immigration: "/Users/giahuyhoangle/website_clone/chaseglobalimmigration.ca/home/index.html"
};

const manifestPath = path.join(process.cwd(), "public", "assets", "external-manifest.json");

let externalManifestCache: Record<string, string> | null = null;

async function getExternalManifest() {
  if (externalManifestCache) return externalManifestCache;
  try {
    const raw = await fs.readFile(manifestPath, "utf8");
    externalManifestCache = JSON.parse(raw) as Record<string, string>;
  } catch {
    externalManifestCache = {};
  }
  return externalManifestCache;
}

function rewriteLocalAssetPath(site: SourceSite, input: string) {
  let value = input.trim();
  if (!value) return value;
  if (value.startsWith("data:")) return value;
  if (value.startsWith("#")) return value;
  if (value.startsWith("mailto:") || value.startsWith("tel:")) return value;
  if (value.startsWith("http://") || value.startsWith("https://")) return value;
  if (value.startsWith("//")) return `https:${value}`;

  value = value.replace(/^\.\.\//, "");
  if (value.startsWith("./")) value = value.slice(2);
  if (value.startsWith("/")) value = value.slice(1);

  return `/source-assets/${site}/${value}`;
}

function rewriteHtmlUrls(html: string, site: SourceSite, externalManifest: Record<string, string>) {
  const attrRegex = /\b(src|href)=["']([^"']+)["']/gi;
  const urlRegex = /url\((["']?)([^)"']+)\1\)/gi;

  let output = html.replace(attrRegex, (full, attr, url: string) => {
    const mapped = externalManifest[url] || rewriteLocalAssetPath(site, url);
    return `${attr}="${mapped}"`;
  });

  output = output.replace(urlRegex, (full, quote, url: string) => {
    const mapped = externalManifest[url] || rewriteLocalAssetPath(site, url);
    return `url("${mapped}")`;
  });

  return output;
}

function extractBody(html: string) {
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  return bodyMatch ? bodyMatch[1] : html;
}

function extractHeadAssets(html: string) {
  const linkMatches = [...html.matchAll(/<link[^>]+rel=['"]stylesheet['"][^>]*>/gi)].map((m) => m[0]);
  const styleMatches = [...html.matchAll(/<style[\s\S]*?<\/style>/gi)].map((m) => m[0]);
  return [...linkMatches, ...styleMatches].join("\n");
}

export async function loadLegacyHtml(site: SourceSite) {
  const htmlPath = sourceHtmlPaths[site];
  const html = await fs.readFile(htmlPath, "utf8");
  const externalManifest = await getExternalManifest();

  const headAssetsRaw = extractHeadAssets(html)
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<noscript[\s\S]*?<\/noscript>/gi, "");
  const bodyRaw = extractBody(html)
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<noscript[\s\S]*?<\/noscript>/gi, "");

  const rewrittenHead = rewriteHtmlUrls(headAssetsRaw, site, externalManifest);
  const rewrittenBody = rewriteHtmlUrls(bodyRaw, site, externalManifest);

  return `
    <div class="legacy-wrap legacy-${site}">
      ${rewrittenHead}
      ${rewrittenBody}
    </div>
  `;
}

