const SITE_URL = "https://milanendurancelab.com";
const locales = ["en", "sr"];
const routes = ["", "/resources", "/contact", "/privacy"];

export default function sitemap() {
  const now = new Date();

  return locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${SITE_URL}/${locale}${route}`,
      lastModified: now,
      changeFrequency: route === "" ? "weekly" : "monthly",
      priority: route === "" ? 1 : 0.7,
    }))
  );
}
