"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { localeHref } from "@/i18n/t";

function swapLocale(pathname, currentLocale, targetLocale) {
  if (!pathname) return `/${targetLocale}`;
  const prefix = `/${currentLocale}`;
  if (pathname.startsWith(prefix)) return pathname.replace(prefix, `/${targetLocale}`);
  return `/${targetLocale}`;
}

export default function SiteHeader({ locale, dict }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    { href: localeHref(locale, "") + "#pricing", label: dict.common.coaching },
    { href: localeHref(locale, "") + "#about", label: dict.common.about },
    { href: localeHref(locale, "") + "#faq", label: "FAQ" }
  ];

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link href={localeHref(locale, "")} className="logo logo--wordmark" onClick={closeMenu}>
          Milan Endurance Lab
        </Link>

        <nav aria-label="Main navigation" className="nav">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>{link.label}</Link>
          ))}
        </nav>

        <div className="site-header__actions">
          <div className="lang-switch" aria-label="Language switcher">
            <Link href={swapLocale(pathname, locale, "en")}>EN</Link>
            <span>/</span>
            <Link href={swapLocale(pathname, locale, "sr")}>SR</Link>
          </div>
          <Link className="btn btn--primary btn--small" href={localeHref(locale, "") + "#intake"}>
            {dict.common.bookCall}
          </Link>
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label="Open menu"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      <div id="mobile-nav" className={`mobile-menu ${menuOpen ? "is-open" : ""}`}>
        <nav aria-label="Mobile navigation" className="mobile-menu__links">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={closeMenu}>{link.label}</Link>
          ))}
          <Link className="btn btn--primary" href={localeHref(locale, "") + "#intake"} onClick={closeMenu}>
            {dict.common.bookCall}
          </Link>
        </nav>
      </div>
    </header>
  );
}
