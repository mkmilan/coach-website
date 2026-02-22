import { getDictionary } from "@/i18n/t";

export const metadata = {
  title: "Resources | Milan Endurance Coaching"
};

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
              <a className="inline-link" href={item.href} target="_blank" rel="noreferrer">
                {dict.resources.openResource}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
