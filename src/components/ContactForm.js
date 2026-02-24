export default function ContactForm({ dict, formEndpoint }) {
	return (
		<form className="contact-form card" action={formEndpoint} method="post">
			<h2>{dict.contact.formTitle}</h2>
			<p>{dict.contact.formText}</p>
			<input type="hidden" name="_subject" value="Coaching inquiry" />

			<label>
				{dict.contact.fields.name}
				<input required name="name" />
			</label>

			<label>
				{dict.contact.fields.email}
				<input required type="email" name="email" />
			</label>

			<label>
				{dict.contact.fields.sport}
				<select name="sport" defaultValue="runner">
					<option value="runner">Runner</option>
					<option value="cyclist">Cyclist</option>
					<option value="triathlete">Triathlete</option>
				</select>
			</label>

			<label>
				{dict.contact.fields.timezone}
				<input name="timezone" placeholder="Europe/Belgrade" />
			</label>

			<label>
				{dict.contact.fields.method}
				<select name="preferredMethod" defaultValue="email">
					<option value="email">Email</option>
					<option value="video-call">Video call</option>
				</select>
			</label>

			<label>
				{dict.contact.fields.budget}
				<input name="budget" placeholder="e.g. 120 EUR / month" />
			</label>

			<label>
				{dict.contact.fields.window}
				<input name="preferredWindow" placeholder="Mon-Thu 18:00-21:00" />
			</label>

			<label>
				{dict.contact.fields.message}
				<textarea required rows="5" name="message" />
			</label>

			<p className="small-note">{dict.contact.timezoneNote}</p>
			<button type="submit" className="btn btn--secondary">
				{dict.contact.sendInquiry}
			</button>
		</form>
	);
}
