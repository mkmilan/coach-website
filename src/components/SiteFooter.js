import Link from "next/link";
import { localeHref } from "@/i18n/t";

export default function SiteFooter({ locale, dict }) {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <p>{dict.common.footerLine}</p>
        <div className="site-footer__links">
          <Link href={localeHref(locale, "")}>{dict.common.home}</Link>
          <Link href={localeHref(locale, "resources")}>{dict.common.resources}</Link>
          <Link href={localeHref(locale, "contact")}>{dict.common.contact}</Link>
        </div>
      </div>
    </footer>
  );
}
