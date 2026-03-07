"use client";

import { useEffect, useId, useState } from "react";

export default function ResourceLink({ label, tooltip }) {
  const [visible, setVisible] = useState(false);
  const tooltipId = useId();

  useEffect(() => {
    if (!visible) return undefined;
    const timer = setTimeout(() => setVisible(false), 1800);
    return () => clearTimeout(timer);
  }, [visible]);

  return (
    <div className={`resource-link ${visible ? "is-visible" : ""}`}>
      <button
        type="button"
        className="inline-link resource-link__button"
        onClick={() => setVisible(true)}
        aria-describedby={tooltipId}
      >
        {label}
      </button>
      <span id={tooltipId} className="resource-link__tooltip" role="status" aria-live="polite">
        {tooltip}
      </span>
    </div>
  );
}
