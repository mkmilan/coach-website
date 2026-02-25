import { getDictionary } from "@/i18n/t";

function formatDate(locale) {
  const date = new Date("2026-02-25");
  return new Intl.DateTimeFormat(locale === "sr" ? "sr-RS" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  }).format(date);
}

export default function PrivacyPage({ params }) {
  const { locale } = params;
  const dict = getDictionary(locale);

  return (
    <section className="section privacy-page">
      <div className="container">
        <h1>{dict.privacy.title}</h1>
        <p className="small-note">
          {dict.privacy.lastUpdatedLabel}: {formatDate(locale)}
        </p>
        <p className="lead">{dict.privacy.intro}</p>

        <div className="card-grid">
          {dict.privacy.sections.map((item) => (
            <article className="card" key={item.title}>
              <h2>{item.title}</h2>
              <p>{item.body}</p>
            </article>
          ))}
        </div>

        <div className="card legal-card">
          <h2>{dict.legal.title}</h2>
          <p>{dict.legal.intro}</p>
          <div className="legal-list">
            {dict.legal.sections.map((item) => (
              <div key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
