import { loadLegacyHtml } from "@/lib/legacy-html";

export default async function AcademyRaw() {
  const html = await loadLegacyHtml("academy");

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

