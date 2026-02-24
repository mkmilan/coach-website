import ContactForm from "@/components/ContactForm";
import { getDictionary } from "@/i18n/t";

const CALENDLY_URL = "https://calendly.com/milanendurancelab/30min";
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mrearevw";

export const metadata = {
	title: "Contact | Milan Endurance Coaching",
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

				</div>

				<ContactForm dict={dict} formEndpoint={FORMSPREE_ENDPOINT} locale={params.locale} />
			</div>
		</section>
	);
}
