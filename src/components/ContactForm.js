"use client";

import { useMemo, useState } from "react";

export default function ContactForm({ dict, email }) {
  const [form, setForm] = useState({
    name: "",
    senderEmail: "",
    sport: "runner",
    timezone: "",
    preferredMethod: "email",
    preferredWindow: "",
    message: ""
  });

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent("Coaching inquiry");
    const body = encodeURIComponent(
      [
        `Name: ${form.name}`,
        `Email: ${form.senderEmail}`,
        `Sport: ${form.sport}`,
        `Timezone: ${form.timezone}`,
        `Preferred method: ${form.preferredMethod}`,
        `Preferred call windows: ${form.preferredWindow}`,
        "",
        "Message:",
        form.message
      ].join("\n")
    );

    return `mailto:${email}?subject=${subject}&body=${body}`;
  }, [email, form]);

  function onChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <form className="contact-form card" action={mailtoHref} method="post" encType="text/plain">
      <h2>{dict.contact.formTitle}</h2>
      <p>{dict.contact.formText}</p>

      <label>
        {dict.contact.fields.name}
        <input required name="name" value={form.name} onChange={onChange} />
      </label>

      <label>
        {dict.contact.fields.email}
        <input required type="email" name="senderEmail" value={form.senderEmail} onChange={onChange} />
      </label>

      <label>
        {dict.contact.fields.sport}
        <select name="sport" value={form.sport} onChange={onChange}>
          <option value="runner">Runner</option>
          <option value="cyclist">Cyclist</option>
          <option value="triathlete">Triathlete</option>
        </select>
      </label>

      <label>
        {dict.contact.fields.timezone}
        <input required name="timezone" placeholder="Europe/Belgrade" value={form.timezone} onChange={onChange} />
      </label>

      <label>
        {dict.contact.fields.method}
        <select name="preferredMethod" value={form.preferredMethod} onChange={onChange}>
          <option value="email">Email</option>
          <option value="video-call">Video call</option>
        </select>
      </label>

      <label>
        {dict.contact.fields.window}
        <input name="preferredWindow" placeholder="Mon-Thu 18:00-21:00" value={form.preferredWindow} onChange={onChange} />
      </label>

      <label>
        {dict.contact.fields.message}
        <textarea required rows="5" name="message" value={form.message} onChange={onChange} />
      </label>

      <p className="small-note">{dict.contact.timezoneNote}</p>
      <button type="submit" className="btn btn--secondary">
        {dict.contact.sendEmail}
      </button>
    </form>
  );
}
