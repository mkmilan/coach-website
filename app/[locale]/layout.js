import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { getDictionary } from "@/i18n/t";

export default function LocaleLayout({ children, params }) {
  const dict = getDictionary(params.locale);

  return (
    <div className="site-shell">
      <SiteHeader locale={params.locale} dict={dict} />
      <main>{children}</main>
      <SiteFooter locale={params.locale} dict={dict} />
    </div>
  );
}
