import Link from "next/link";
import {
  FaArrowRight,
  FaBicycle,
  FaCalendarDays,
  FaChartSimple,
  FaClipboardList,
  FaPeopleGroup,
  FaPersonRunning,
  FaShieldHalved,
  FaSliders
} from "react-icons/fa6";
import CoachingIntakeForm from "@/components/CoachingIntakeForm";
import { getDictionary } from "@/i18n/t";
import { buildPageMetadata, seoContent } from "@/seo/metadata";

const BENEFIT_ICONS = [FaSliders, FaCalendarDays, FaChartSimple, FaPeopleGroup];
const PROCESS_ICONS = [FaClipboardList, FaCalendarDays, FaPersonRunning, FaChartSimple];

export function generateMetadata({ params }) {
  const locale = params.locale === "sr" ? "sr" : "en";
  const content = seoContent[locale].home;

  return buildPageMetadata({
    locale,
    path: "",
    title: content.title,
    description: content.description
  });
}

export default function HomePage({ params }) {
  const { locale } = params;
  const dict = getDictionary(locale);

  return (
    <>
      <section className="new-hero">
        <div className="container new-hero__grid">
          <div className="new-hero__copy">
            <p className="eyebrow">{dict.home.heroEyebrow}</p>
            <h1>{dict.home.heroTitle}</h1>
            <p className="new-hero__subtitle">{dict.home.heroSubtitle}</p>
            <div className="new-hero__actions">
              <Link className="btn btn--primary" href={`/${locale}#pricing`}>
                {dict.home.heroPrimaryCta} <FaArrowRight aria-hidden="true" />
              </Link>
              <Link className="btn btn--secondary" href={`/${locale}#intake`}>
                {dict.home.heroSecondaryCta}
              </Link>
            </div>
          </div>
          <div className="new-hero__image-wrap" aria-hidden="true">
            <img className="new-hero__image" src="/hero-coaching.jpg" alt="" />
          </div>
        </div>
      </section>

      <section className="section value-section">
        <div className="container">
          <h2 className="value-section__title">
            {dict.home.valueTitle} <span>{dict.home.valueTitleAccent}</span>
          </h2>
          <div className="benefit-grid">
            {dict.home.benefits.map((item, index) => {
              const Icon = BENEFIT_ICONS[index];
              return (
                <article className="benefit-item" key={item.title}>
                  <Icon aria-hidden="true" />
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section pricing-section" id="pricing">
        <div className="container">
          <p className="eyebrow">{dict.home.pricingEyebrow}</p>
          <h2>{dict.home.pricingTitle}</h2>
          <p className="lead">{dict.home.pricingIntro}</p>

          <div className="pricing-grid">
            {dict.home.plans.map((plan, index) => (
              <article className={`pricing-card ${index === 1 ? "pricing-card--featured" : ""}`} key={plan.name}>
                {index === 1 ? <span className="pricing-card__tag">{dict.home.featuredPlan}</span> : null}
                <h3>{plan.name}</h3>
                <p className="pricing-card__summary">{plan.summary}</p>
                <p className="pricing-card__price"><strong>€{plan.price}</strong><span>/ {dict.home.month}</span></p>
                <ul className="pricing-card__list">
                  {plan.features.map((feature) => <li key={feature}>{feature}</li>)}
                </ul>
                <Link className={`btn ${index === 1 ? "btn--primary" : "btn--secondary"} pricing-card__cta`} href={`/${locale}#intake`}>
                  {plan.cta}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section process-section" id="coaching">
        <div className="container">
          <p className="eyebrow">{dict.home.processEyebrow}</p>
          <h2>{dict.home.processTitle}</h2>
          <div className="process-grid">
            {dict.home.processSteps.map((item, index) => {
              const Icon = PROCESS_ICONS[index];
              return (
                <article className="process-step" key={item.title}>
                  <span className="process-step__number">{index + 1}</span>
                  <Icon aria-hidden="true" />
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section intake-section" id="intake">
        <div className="container intake-layout">
          <div>
            <p className="eyebrow">{dict.intake.eyebrow}</p>
            <h2>{dict.intake.title}</h2>
            <p className="lead">{dict.intake.intro}</p>
            <CoachingIntakeForm dict={dict} />
          </div>
          <div className="intake-layout__image" aria-hidden="true">
            <img src="/coaching-landscape.jpg" alt="" />
          </div>
        </div>
      </section>

      <section className="section about-section" id="about">
        <div className="container about-layout">
          <img className="about-layout__photo" src="/me-card.jpg" alt={dict.home.aboutImageAlt} />
          <div>
            <p className="eyebrow">{dict.home.aboutEyebrow}</p>
            <h2>{dict.home.aboutTitle}</h2>
            <p>{dict.home.aboutBody}</p>
            <div className="about-trust">
              <span><FaShieldHalved aria-hidden="true" /> {dict.home.aboutTrust[0]}</span>
              <span><FaBicycle aria-hidden="true" /> {dict.home.aboutTrust[1]}</span>
              <span><FaChartSimple aria-hidden="true" /> {dict.home.aboutTrust[2]}</span>
              <span><FaPeopleGroup aria-hidden="true" /> {dict.home.aboutTrust[3]}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section faq-section" id="faq">
        <div className="container section--narrow">
          <p className="eyebrow">{dict.home.faqEyebrow}</p>
          <h2>{dict.home.faqTitle}</h2>
          <div className="faq-list">
            {dict.home.faq.map((item) => (
              <details key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section final-cta">
        <div className="container final-cta__box">
          <h2>{dict.home.bottomCtaTitle}</h2>
          <p>{dict.home.bottomCtaBody}</p>
          <Link className="btn btn--primary" href={`/${locale}#intake`}>
            {dict.home.bottomCtaButton} <FaArrowRight aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
