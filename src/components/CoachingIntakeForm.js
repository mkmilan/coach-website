"use client";

import { useState } from "react";

const CALENDLY_URL = "https://calendly.com/milanendurancelab/30min";
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mrearevw";

export default function CoachingIntakeForm({ dict }) {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("sending");

    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" }
      });

      if (!response.ok) {
        setStatus("error");
        return;
      }

      window.location.href = CALENDLY_URL;
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="intake-form" onSubmit={handleSubmit}>
      <input type="hidden" name="_subject" value="Coaching intro call intake" />

      <label>
        {dict.intake.fields.age}
        <select required name="age" defaultValue="">
          <option value="" disabled>{dict.intake.select}</option>
          <option>18–29</option>
          <option>30–39</option>
          <option>40–49</option>
          <option>50–59</option>
          <option>60+</option>
        </select>
      </label>

      <label>
        {dict.intake.fields.gender}
        <select required name="gender" defaultValue="">
          <option value="" disabled>{dict.intake.select}</option>
          <option value="male">{dict.intake.options.male}</option>
          <option value="female">{dict.intake.options.female}</option>
          <option value="prefer-not">{dict.intake.options.preferNot}</option>
        </select>
      </label>

      <label>
        {dict.intake.fields.sport}
        <select required name="sport" defaultValue="">
          <option value="" disabled>{dict.intake.select}</option>
          <option value="running">{dict.intake.options.running}</option>
          <option value="cycling">{dict.intake.options.cycling}</option>
        </select>
      </label>

      <label>
        {dict.intake.fields.experience}
        <select required name="experience" defaultValue="">
          <option value="" disabled>{dict.intake.select}</option>
          <option value="lt1">{dict.intake.options.lessThanOne}</option>
          <option value="1to3">{dict.intake.options.oneToThree}</option>
          <option value="3to5">{dict.intake.options.threeToFive}</option>
          <option value="5plus">{dict.intake.options.fivePlus}</option>
        </select>
      </label>

      <label>
        {dict.intake.fields.hours}
        <select required name="weeklyHours" defaultValue="">
          <option value="" disabled>{dict.intake.select}</option>
          <option value="lt4">{dict.intake.options.underFour}</option>
          <option value="4to7">{dict.intake.options.fourToSeven}</option>
          <option value="8to11">{dict.intake.options.eightToEleven}</option>
          <option value="12plus">{dict.intake.options.twelvePlus}</option>
        </select>
      </label>

      <label>
        {dict.intake.fields.goal}
        <input required name="goal" placeholder={dict.intake.goalPlaceholder} />
      </label>

      <label className="intake-form__wide">
        {dict.intake.fields.email}
        <input required type="email" name="email" autoComplete="email" />
      </label>

      {status === "error" ? <p className="form-error intake-form__wide">{dict.intake.error}</p> : null}

      <p className="intake-form__time intake-form__wide">{dict.intake.timeNote}</p>

      <button type="submit" className="btn btn--primary intake-form__submit intake-form__wide" disabled={status === "sending"}>
        {status === "sending" ? dict.intake.sending : dict.intake.submit}
      </button>

      <p className="intake-form__reassurance intake-form__wide">{dict.intake.reassurance}</p>
    </form>
  );
}
