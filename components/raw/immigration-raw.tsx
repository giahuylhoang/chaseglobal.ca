import { loadLegacyHtml } from "@/lib/legacy-html";

export default async function ImmigrationRaw() {
  const html = await loadLegacyHtml("immigration");

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

