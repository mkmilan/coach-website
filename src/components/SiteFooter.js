import Link from "next/link";
import { FaInstagram } from "react-icons/fa6";
import { localeHref } from "@/i18n/t";

const INSTAGRAM_URL = "https://instagram.com/milan.endurance.lab";

export default function SiteFooter({ locale, dict }) {
	return (
		<footer className="site-footer">
			<div className="container site-footer__inner">
				<div className="site-footer__links">
					<Link href={localeHref(locale, "")}>{dict.common.home}</Link>
					{/* <Link href={localeHref(locale, "resources")}>{dict.common.resources}</Link> */}
					<Link href={localeHref(locale, "contact")}>{dict.common.contact}</Link>
					<Link href={localeHref(locale, "privacy")}>{dict.common.privacy}</Link>
				</div>
				<a
					className="site-footer__instagram"
					href={INSTAGRAM_URL}
					target="_blank"
					rel="noreferrer"
					aria-label="Instagram"
				>
					<FaInstagram />
				</a>
			</div>
		</footer>
	);
}
