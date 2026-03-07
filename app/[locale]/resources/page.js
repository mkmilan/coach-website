import { getDictionary } from "@/i18n/t";
import { buildPageMetadata, seoContent } from "@/seo/metadata";
import ResourceLink from "@/components/ResourceLink";

export function generateMetadata({ params }) {
  const locale = params.locale === "sr" ? "sr" : "en";
  const content = seoContent[locale].resources;

  return buildPageMetadata({
    locale,
    path: "/resources",
    title: content.title,
    description: content.description
  });
}

export default function ResourcesPage({ params }) {
  const dict = getDictionary(params.locale);

  return (
    <section className="section resources-page">
      <div className="container">
        <h1>{dict.resources.title}</h1>
        <p className="lead">{dict.resources.intro}</p>
        <div className="card-grid">
          {dict.resources.items.map((item) => (
            <article className="card" key={item.title}>
              <h2>{item.title}</h2>
              <ul className="check-list">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <ResourceLink label={dict.resources.openResource} tooltip={dict.resources.resourceInProgress} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
