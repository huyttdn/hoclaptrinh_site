import { site } from "../data/site";

export function pageMeta({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  const fullTitle = `${title} | ${site.name}`;

  return [
    { title: fullTitle },
    { name: "description", content: description },
    { property: "og:title", content: fullTitle },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: site.name },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: fullTitle },
    { name: "twitter:description", content: description },
  ];
}
