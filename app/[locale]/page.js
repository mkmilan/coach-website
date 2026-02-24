import Link from "next/link";
import { FaPersonBiking, FaPersonRunning, FaPersonSwimming } from "react-icons/fa6";
import { getDictionary } from "@/i18n/t";

const CALENDLY_URL = "https://calendly.com/milanendurancelab/30min";

function HeroImage() {
	return (
		<picture className="hero__media">
			<source media="(max-width: 767px) and (min-height: 860px)" srcSet="/hero_mobile_1080x1920.png" />
			<source media="(max-width: 767px)" srcSet="/hero_mobile_1080x1350.png" />
			<img src="/hero_desktop.png" alt="Runner and cyclist training outdoors" />
		</picture>
	);
}

const PANEL_IMAGES = ["/me-card.jpg", "/principle.png", "/online.png"];

export default function HomePage({ params }) {
	const { locale } = params;
	const dict = getDictionary(locale);

	return (
		<>
			<section className="hero section">
				<HeroImage />
				<div className="hero__overlay" />
				<div className="container hero__content">
					<p className="eyebrow">{dict.home.heroEyebrow}</p>
					<h1>{dict.home.heroTitle}</h1>
					<p className="hero__subtitle">{dict.home.heroSubtitle}</p>
					<div className="hero__actions">
						<a className="btn btn--primary" href={CALENDLY_URL} target="_blank" rel="noreferrer">
							{dict.common.bookCall}
						</a>
						<Link className="btn btn--ghost" href={`/${locale}#coaching-process`}>
							{dict.home.heroSecondaryCta}
						</Link>
					</div>
					<div className="hero__cred hero__cred-badge">
						<img src="/uesca-badge-bg.jpeg" alt="UESCA certification logo" />
						<p>{dict.home.heroCred}</p>
					</div>
				</div>
			</section>

			<section className="section section--compact section-panels" id="about">
				<div className="container">
					<div className="panel-grid panel-grid--3">
						<article className="panel-card">
							<h2>{dict.home.aboutTitle}</h2>
							<img src={PANEL_IMAGES[0]} alt="Milan coaching profile photo" />
							<p>{dict.home.aboutBody}</p>
							<div className="cert-badge">
								<img src="/uesca-badge.png" alt="UESCA Certified Triathlon Coach badge" />
								<span>UESCA Certified Triathlon Coach</span>
							</div>
						</article>

						<article className="panel-card" id="coaching">
							<h2>{dict.home.principlesTitle}</h2>
							<img src={PANEL_IMAGES[1]} alt="Training session placeholder" />
							<ul className="check-list">
								{dict.home.principles.slice(0, 3).map((item) => (
									<li key={item.title}>{item.title}</li>
								))}
							</ul>
						</article>

						<article className="panel-card">
							<h2>{dict.home.offerTitle}</h2>
							<img src={PANEL_IMAGES[2]} alt="Cycling coaching placeholder" />
							<ul className="check-list">
								{dict.home.offerItems.slice(0, 3).map((item) => (
									<li key={item}>{item}</li>
								))}
							</ul>
						</article>
					</div>
				</div>
			</section>

			<section className="section section--compact section--band">
				<div className="container">
					<h2 className="section-title-center">{dict.home.fitTitle}</h2>
					<div className="who-grid">
						<article className="who-card">
							<div className="who-card__icon" aria-hidden="true">
								<FaPersonRunning />
							</div>
							<h3>Runners</h3>
							<p>{dict.home.fitYes[0]}</p>
						</article>
						<article className="who-card">
							<div className="who-card__icon" aria-hidden="true">
								<FaPersonBiking />
							</div>
							<h3>Cyclists</h3>
							<p>{dict.home.fitYes[1]}</p>
						</article>
						<article className="who-card">
							<div className="who-card__icon" aria-hidden="true">
								<FaPersonSwimming />
							</div>
							<h3>Triathletes</h3>
							<p>{dict.home.fitYes[2]}</p>
						</article>
					</div>
				</div>
			</section>

			<section className="section section--compact">
				<div className="container">
					<div className="card-grid card-grid--2">
						<article className="card">
							<h2>{dict.home.optimizeTitle}</h2>
							<ul className="check-list">
								{dict.home.optimizeItems.map((item) => (
									<li key={item}>{item}</li>
								))}
							</ul>
						</article>
						<article className="card">
							<h2>{dict.home.offerIncludedTitle}</h2>
							<ul className="check-list">
								{dict.home.offerItems.map((item) => (
									<li key={item}>{item}</li>
								))}
							</ul>
						</article>
					</div>
				</div>
			</section>

			<section className="section section--compact principles-feature">
				<div className="container">
					<div className="principles-frame">
						<h2>{dict.home.principlesTitle}</h2>
						<ul className="principles-list">
							{dict.home.principles.map((item, index) => (
								<li key={item.title}>
									<span className="principles-list__num">{String(index + 1).padStart(2, "0")}</span>
									<div>
										<h3>{item.title}</h3>
										<p>{item.body}</p>
									</div>
								</li>
							))}
						</ul>
					</div>
				</div>
			</section>

			<section className="section section--compact">
				<div className="container">
					<div className="card-grid card-grid--2">
						<article className="card">
							<h2>{dict.home.auditTitle}</h2>
							<ul className="check-list">
								{dict.home.auditItems.map((item) => (
									<li key={item}>{item}</li>
								))}
							</ul>
						</article>
						<article className="card card--muted">
							<h2>{dict.home.fitNoTitle}</h2>
							<ul className="check-list check-list--x">
								{dict.home.fitNo.map((item) => (
									<li key={item}>{item}</li>
								))}
							</ul>
						</article>
					</div>
				</div>
			</section>

			<section className="section section--tint section--compact">
				<div className="container section--narrow development-block">
					<div>
						<h2>{dict.home.developingTitle}</h2>
						<p>{dict.home.developingBody}</p>
					</div>
					<figure className="development-image">
						<img src="/lab.png" alt="Milan Endurance Lab visual identity" />
					</figure>
				</div>
			</section>

			<section className="section section--compact" id="coaching-process">
				<div className="container">
					<h2>{dict.home.processTitle}</h2>
					<ol className="steps steps--row">
						{dict.home.processSteps.map((item) => (
							<li key={item.title}>
								<h3>{item.title}</h3>
								<p>{item.body}</p>
							</li>
						))}
					</ol>
				</div>
			</section>

			{/* <section className="section section--narrow section--compact">
				<div className="container resources-preview">
					<h2>{dict.home.resourcesTitle}</h2>
					<p>{dict.home.resourcesBody}</p>
					<Link className="btn btn--secondary" href={`/${locale}/resources`}>
						{dict.common.viewResources}
					</Link>
				</div>
			</section> */}

			<section className="section section--cta section--compact" id="contact">
				<div className="container cta-box">
					<h2>{dict.home.bottomCtaTitle}</h2>
					<p>{dict.home.bottomCtaBody}</p>
					<div className="hero__actions">
						<a className="btn btn--primary" href={CALENDLY_URL} target="_blank" rel="noreferrer">
							{dict.common.bookCall}
						</a>
						<Link className="btn btn--secondary" href={`/${locale}/contact`}>
							{dict.common.contact}
						</Link>
					</div>
				</div>
			</section>
		</>
	);
}
