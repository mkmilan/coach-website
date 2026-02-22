import ContactForm from "@/components/ContactForm";
import { getDictionary } from "@/i18n/t";

const CALENDLY_URL = "https://calendly.com/YOUR_HANDLE/intro-call";
const PLACEHOLDER_EMAIL = "coach@example.com";

export const metadata = {
  title: "Contact | Milan Endurance Coaching"
};

export default function ContactPage({ params }) {
  const dict = getDictionary(params.locale);

  return (
    <section className="section contact-page">
      <div className="container">
        <h1>{dict.contact.title}</h1>
        <p className="lead">{dict.contact.intro}</p>

        <div className="card-grid card-grid--2">
          <article className="card">
            <h2>{dict.common.bookCall}</h2>
            <p>{dict.contact.callText}</p>
            <a className="btn btn--primary" href={CALENDLY_URL} target="_blank" rel="noreferrer">
              {dict.common.bookCall}
            </a>
          </article>

          <article className="card">
            <h2>{dict.contact.emailTitle}</h2>
            <p>{dict.contact.emailText}</p>
            <a className="inline-link" href={`mailto:${PLACEHOLDER_EMAIL}`}>
              {PLACEHOLDER_EMAIL}
            </a>
          </article>
        </div>

        <ContactForm locale={params.locale} dict={dict} email={PLACEHOLDER_EMAIL} />
      </div>
    </section>
  );
}
