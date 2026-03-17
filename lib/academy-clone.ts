import fs from "node:fs/promises";
import path from "node:path";

const academyHtmlPath = "/Users/giahuyhoangle/website_clone/chaseglobalacademy.com/index.html";
const academyManifestPath = path.join(process.cwd(), "public", "assets", "academy", "asset-manifest.json");

type ManifestItem = {
  sourceUrl: string;
  originalPath: string;
  sourceRef: string;
  newPath: string;
  section: string;
  type: string;
  notes: string;
};

let academyMapCache: Record<string, string> | null = null;

function normalizeRef(ref: string) {
  return ref.trim().replace(/&amp;/g, "&");
}

async function getAcademyAssetMap() {
  if (academyMapCache) return academyMapCache;
  const raw = await fs.readFile(academyManifestPath, "utf8");
  const items = JSON.parse(raw) as ManifestItem[];
  const map: Record<string, string> = {};
  for (const item of items) {
    const keys = [item.sourceRef, item.originalPath, decodeURIComponent(item.sourceRef)];
    for (const key of keys.filter(Boolean)) {
      map[normalizeRef(key)] = item.newPath;
      map[normalizeRef(key).replace(/^\.\//, "")] = item.newPath;
      map[normalizeRef(key).replace(/^\//, "")] = item.newPath;
    }
  }
  academyMapCache = map;
  return map;
}

function rewriteToAcademyAssets(html: string, map: Record<string, string>) {
  const attrRegex = /\b(src|href)=["']([^"']+)["']/gi;
  const urlRegex = /url\((["']?)([^)"']+)\1\)/gi;

  const rewriteRef = (raw: string) => {
    const ref = normalizeRef(raw);
    if (!ref || ref.startsWith("data:") || ref.startsWith("#") || ref.startsWith("mailto:") || ref.startsWith("tel:")) return ref;
    if (map[ref]) return map[ref];
    if (map[ref.replace(/^\.\//, "")]) return map[ref.replace(/^\.\//, "")];
    if (map[ref.replace(/^\//, "")]) return map[ref.replace(/^\//, "")];
    if (/^https?:\/\//i.test(ref)) return ref;
    return `/source-assets/academy/${ref.replace(/^\.\//, "").replace(/^\//, "")}`;
  };

  let output = html.replace(attrRegex, (_full, attr, ref: string) => `${attr}="${rewriteRef(ref)}"`);
  output = output.replace(urlRegex, (_full, _q, ref: string) => `url("${rewriteRef(ref)}")`);
  return output;
}

function extractBody(html: string) {
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  return bodyMatch ? bodyMatch[1] : html;
}

function extractHeadAssets(html: string) {
  const links = [...html.matchAll(/<link[^>]+rel=['"]stylesheet['"][^>]*>/gi)].map((m) => m[0]);
  const styles = [...html.matchAll(/<style[\s\S]*?<\/style>/gi)].map((m) => m[0]);
  return [...links, ...styles].join("\n");
}

function markerIndex(content: string, id: string, occurrence: number) {
  let from = 0;
  for (let i = 0; i < occurrence; i += 1) {
    const found = content.indexOf(`data-id="${id}"`, from);
    if (found === -1) return -1;
    from = found + 1;
    if (i === occurrence - 1) return found;
  }
  return -1;
}

function sectionStart(content: string, markerPos: number) {
  if (markerPos < 0) return -1;
  return content.lastIndexOf("<section", markerPos);
}

function nearestBlockStart(content: string, markerPos: number) {
  if (markerPos < 0) return -1;
  const starts = [
    content.lastIndexOf("<section", markerPos),
    content.lastIndexOf('<div class="elementor-element', markerPos),
    content.lastIndexOf("<div", markerPos)
  ].filter((idx) => idx >= 0);
  if (!starts.length) return -1;
  return Math.max(...starts);
}

function splitRangeByMarker(content: string, marker: string, finder: (value: string, markerPos: number) => number) {
  const markerPos = content.indexOf(marker);
  if (markerPos < 0) return -1;
  return finder(content, markerPos);
}

function splitWhyChooseChunk(content: string) {
  if (!content) return { whyChoose: "", faq: "", booking: "" };

  const faqStart = splitRangeByMarker(content, "FREQUENTLY ASKED QUESTIONS", sectionStart);
  const bookingStart = splitRangeByMarker(content, "Book An Appointment", sectionStart);

  const boundaries = [
    { key: "faq", start: faqStart },
    { key: "booking", start: bookingStart }
  ]
    .filter((item) => item.start >= 0)
    .sort((a, b) => a.start - b.start);

  if (!boundaries.length) {
    return { whyChoose: content, faq: "", booking: "" };
  }

  const firstBoundary = boundaries[0];
  let whyChoose = content.slice(0, firstBoundary.start);
  let faq = "";
  let booking = "";

  for (let i = 0; i < boundaries.length; i += 1) {
    const current = boundaries[i];
    const next = boundaries[i + 1];
    const part = content.slice(current.start, next ? next.start : content.length);
    if (current.key === "faq") faq = part;
    if (current.key === "booking") booking = part;
  }

  if (!faq && bookingStart >= 0 && bookingStart < content.length) {
    booking = content.slice(bookingStart);
    whyChoose = content.slice(0, bookingStart);
  }

  return { whyChoose, faq, booking };
}

function splitTrustAndRecognitionBand(content: string) {
  if (!content) {
    return {
      countryDestinations: "",
      partnersLogoStrip: "",
      certificationsTrust: "",
      industryRecognition: ""
    };
  }

  const collaborationsStart = splitRangeByMarker(content, "OUR Collaborations", nearestBlockStart);
  const certificationsStart = splitRangeByMarker(content, "Credentials and Certifications", nearestBlockStart);
  const industryStart = splitRangeByMarker(content, "Industry Recognitions", nearestBlockStart);

  const boundaries = [
    { key: "partners", start: collaborationsStart },
    { key: "certifications", start: certificationsStart },
    { key: "industry", start: industryStart }
  ]
    .filter((item) => item.start >= 0)
    .sort((a, b) => a.start - b.start);

  if (!boundaries.length) {
    return {
      countryDestinations: content,
      partnersLogoStrip: "",
      certificationsTrust: "",
      industryRecognition: ""
    };
  }

  const firstBoundary = boundaries[0];
  const countryDestinations = content.slice(0, firstBoundary.start);
  let partnersLogoStrip = "";
  let certificationsTrust = "";
  let industryRecognition = "";

  for (let i = 0; i < boundaries.length; i += 1) {
    const current = boundaries[i];
    const next = boundaries[i + 1];
    const part = content.slice(current.start, next ? next.start : content.length);
    if (current.key === "partners") partnersLogoStrip = part;
    if (current.key === "certifications") certificationsTrust = part;
    if (current.key === "industry") industryRecognition = part;
  }

  return { countryDestinations, partnersLogoStrip, certificationsTrust, industryRecognition };
}

export async function loadAcademyCloneChunks() {
  const html = await fs.readFile(academyHtmlPath, "utf8");
  const map = await getAcademyAssetMap();

  const headRaw = extractHeadAssets(html)
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<noscript[\s\S]*?<\/noscript>/gi, "");

  const bodyRaw = extractBody(html)
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<noscript[\s\S]*?<\/noscript>/gi, "")
    .replace(/<div id="pxl-loadding"[\s\S]*?<\/div>\s*<\/div>/gi, "")
    .replace(/<div id="pxl-loadding"[\s\S]*?<\/div>/gi, "");

  const body = rewriteToAcademyAssets(bodyRaw, map);
  const head = rewriteToAcademyAssets(headRaw, map);

  const anchorMap = [
    { key: "headerTop", id: "0bd7ccc", occurrence: 1 },
    { key: "headerMain", id: "b7ab050", occurrence: 1 },
    { key: "headerSticky", id: "b7ab050", occurrence: 2 },
    { key: "hero", id: "06495e7", occurrence: 1 },
    { key: "countries", id: "ace3e60", occurrence: 1 },
    { key: "partnersTrust", id: "346cc73", occurrence: 1 },
    { key: "industryRecognition", id: "0c42b44", occurrence: 1 },
    { key: "features", id: "d7c5f30", occurrence: 1 },
    { key: "services", id: "a7bcb69", occurrence: 1 },
    { key: "whyChoose", id: "bdc2de9", occurrence: 1 },
    { key: "afterWhyChoose", id: "128e56b", occurrence: 1 },
    { key: "testimonials", id: "9bf0366", occurrence: 1 },
    { key: "footerMain", id: "8ccde96", occurrence: 1 },
    { key: "footerBottom", id: "cede30e", occurrence: 1 }
  ];

  const starts = anchorMap
    .map((a) => ({
      ...a,
      index: sectionStart(body, markerIndex(body, a.id, a.occurrence))
    }))
    .filter((a) => a.index >= 0)
    .sort((a, b) => a.index - b.index);

  const chunks: Record<string, string> = {};
  if (!starts.length) {
    return { head, chunks };
  }

  chunks.prelude = body.slice(0, starts[0].index);
  for (let i = 0; i < starts.length; i += 1) {
    const cur = starts[i];
    const next = starts[i + 1];
    chunks[cur.key] = body.slice(cur.index, next ? next.index : body.length);
  }

  const trustBand = [chunks.countries, chunks.partnersTrust, chunks.industryRecognition].filter(Boolean).join("");
  const trustChunks = splitTrustAndRecognitionBand(trustBand);
  const whyChooseChunks = splitWhyChooseChunk(chunks.whyChoose ?? "");

  chunks.countryDestinations = trustChunks.countryDestinations || chunks.countries || "";
  chunks.partnersLogoStrip = trustChunks.partnersLogoStrip || chunks.partnersTrust || "";
  chunks.certificationsTrust = trustChunks.certificationsTrust || chunks.partnersTrust || "";
  chunks.industryRecognition = trustChunks.industryRecognition || chunks.industryRecognition || "";
  chunks.featuresValueBlocks = chunks.features || "";
  chunks.aboutChaseGlobal = chunks.testimonials || "";
  chunks.whyChooseUsTestimonial = whyChooseChunks.whyChoose || chunks.whyChoose || "";
  chunks.bookingSection = whyChooseChunks.booking || chunks.afterWhyChoose || "";
  chunks.faqSection = whyChooseChunks.faq || "";
  chunks.services = chunks.services || "";
  chunks.hero = chunks.hero || "";
  chunks.footerContact = [chunks.footerMain, chunks.footerBottom].filter(Boolean).join("");

  return { head, chunks };
}

