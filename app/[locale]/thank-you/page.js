import Link from "next/link";
import { getDictionary } from "@/i18n/t";

export default function ThankYouPage({ params }) {
  const dict = getDictionary(params.locale);

  return (
    <section className="section section--narrow">
      <div className="container">
        <div className="card thank-you-card">
          <h1>{dict.thankYou.title}</h1>
          <p>{dict.thankYou.body}</p>
          <div className="hero__actions">
            <Link className="btn btn--primary" href={`/${params.locale}`}>
              {dict.thankYou.backHome}
            </Link>
            <Link className="btn btn--secondary" href={`/${params.locale}/contact`}>
              {dict.thankYou.backContact}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
