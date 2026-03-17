import fs from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";

const siteRoots: Record<string, string> = {
  academy: "/Users/giahuyhoangle/website_clone/chaseglobalacademy.com",
  immigration: "/Users/giahuyhoangle/website_clone/chaseglobalimmigration.ca"
};

function contentTypeFor(filePath: string) {
  const ext = path.extname(filePath).toLowerCase();
  const map: Record<string, string> = {
    ".css": "text/css; charset=utf-8",
    ".js": "application/javascript; charset=utf-8",
    ".svg": "image/svg+xml",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".webp": "image/webp",
    ".gif": "image/gif",
    ".ico": "image/x-icon",
    ".woff": "font/woff",
    ".woff2": "font/woff2",
    ".ttf": "font/ttf",
    ".eot": "application/vnd.ms-fontobject",
    ".mp4": "video/mp4",
    ".webm": "video/webm",
    ".json": "application/json; charset=utf-8",
    ".xml": "application/xml; charset=utf-8",
    ".html": "text/html; charset=utf-8"
  };
  return map[ext] ?? "application/octet-stream";
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ site: string; assetPath: string[] }> }
) {
  const { site, assetPath } = await params;
  const root = siteRoots[site];

  if (!root) return new NextResponse("Unknown site", { status: 404 });

  const safeRelative = assetPath.join("/");
  const absPath = path.normalize(path.join(root, safeRelative));

  if (!absPath.startsWith(root)) {
    return new NextResponse("Forbidden path", { status: 403 });
  }

  try {
    const data = await fs.readFile(absPath);
    return new NextResponse(data, {
      headers: {
        "content-type": contentTypeFor(absPath),
        "cache-control": "public, max-age=3600"
      }
    });
  } catch {
    return new NextResponse("Not found", { status: 404 });
  }
}

