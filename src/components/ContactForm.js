"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ContactForm({ dict, formEndpoint, locale }) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    setSubmitError("");
    setIsSubmitting(true);

    try {
      const formData = new FormData(event.currentTarget);
      const response = await fetch(formEndpoint, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json"
        }
      });

      if (!response.ok) {
        setSubmitError(dict.contact.submitError);
        setIsSubmitting(false);
        return;
      }

      router.push(`/${locale}/thank-you`);
    } catch (_error) {
      setSubmitError(dict.contact.submitError);
      setIsSubmitting(false);
    }
  }

  return (
    <form className="contact-form card" onSubmit={handleSubmit}>
      <h2>{dict.contact.formTitle}</h2>
      <p>{dict.contact.formText}</p>
      <input type="hidden" name="_subject" value="Coaching inquiry" />
      <input
        type="text"
        name="_gotcha"
        tabIndex="-1"
        autoComplete="off"
        className="hp-field"
        aria-hidden="true"
      />

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
      {submitError ? <p className="form-error">{submitError}</p> : null}
      <button type="submit" className="btn btn--secondary">
        {isSubmitting ? dict.contact.sendingInquiry : dict.contact.sendInquiry}
      </button>
    </form>
  );
}
