const SITE_URL = "https://milanendurancelab.com";
const SITE_NAME = "Milan Endurance Coaching";
const DEFAULT_OG_IMAGE = "/hero_desktop.png";
const LOCALES = ["en", "sr"];

function getPathSuffix(path) {
  if (!path || path === "/") return "";
  return path.startsWith("/") ? path : `/${path}`;
}

function getLocaleUrl(locale, path) {
  return `${SITE_URL}/${locale}${getPathSuffix(path)}`;
}

function getAlternates(path) {
  const suffix = getPathSuffix(path);
  const languages = LOCALES.reduce((acc, locale) => {
    acc[locale] = `${SITE_URL}/${locale}${suffix}`;
    return acc;
  }, {});

  languages["x-default"] = `${SITE_URL}/en${suffix}`;
  return languages;
}

export function buildPageMetadata({
  locale,
  path,
  title,
  description,
  index = true
}) {
  const canonical = getLocaleUrl(locale, path);

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: getAlternates(path)
    },
    openGraph: {
      type: "website",
      url: canonical,
      siteName: SITE_NAME,
      title,
      description,
      images: [
        {
          url: DEFAULT_OG_IMAGE,
          width: 1200,
          height: 630,
          alt: "Milan Endurance Coaching"
        }
      ],
      locale: locale === "sr" ? "sr_RS" : "en_US"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [DEFAULT_OG_IMAGE]
    },
    robots: index
      ? {
          index: true,
          follow: true
        }
      : {
          index: false,
          follow: false,
          googleBot: {
            index: false,
            follow: false,
            noimageindex: true
          }
        }
  };
}

export const seoContent = {
  en: {
    home: {
      title: "Online Endurance Coaching for Runners, Cyclists, and Triathletes",
      description:
        "Evidence-based online coaching with clear structure, practical feedback, and long-term progress for runners, cyclists, and triathletes."
    },
    resources: {
      title: "Resources for Endurance Athletes",
      description:
        "Practical sports science resources on threshold training, easy days, and fueling for runners, cyclists, and triathletes."
    },
    contact: {
      title: "Contact and Book Intro Call",
      description:
        "Book an intro call or send a message to discuss your training goals, schedule, time zone, and preferred contact method."
    },
    privacy: {
      title: "Privacy Policy",
      description:
        "How Milan Endurance Coaching handles personal data when you send an inquiry or book an intro call."
    },
    thankYou: {
      title: "Thank You",
      description:
        "Your message was sent successfully. We will review your inquiry and reply soon."
    }
  },
  sr: {
    home: {
      title: "Online Endurance Coaching za trkače, bicikliste i triatlonce",
      description:
        "Coaching zasnovan na nauci, jasna struktura treninga i praktične povratne informacije za dugoročan napredak."
    },
    resources: {
      title: "Resursi za sportiste izdržljivosti",
      description:
        "Praktični sports science resursi o threshold treningu, easy danima i fueling-u za trkače, bicikliste i triatlonce."
    },
    contact: {
      title: "Kontakt i uvodni poziv",
      description:
        "Zakaži uvodni poziv ili pošalji upit sa ciljem, rasporedom, vremenskom zonom i željenim načinom kontakta."
    },
    privacy: {
      title: "Politika privatnosti",
      description:
        "Kako Milan Endurance Coaching obrađuje lične podatke kada pošalješ upit ili zakažeš uvodni poziv."
    },
    thankYou: {
      title: "Hvala na poruci",
      description:
        "Poruka je uspešno poslata. Upit će biti pregledan i odgovor stiže uskoro."
    }
  }
};
