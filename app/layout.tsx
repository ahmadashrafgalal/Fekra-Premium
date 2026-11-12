import type { Metadata } from "next";
import {
  Alexandria,
  IBM_Plex_Sans_Arabic,
  Reem_Kufi,
  Bricolage_Grotesque,
  Instrument_Serif,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";
import { SITE_URL, LINKS } from "@/lib/data";

const alexandria = Alexandria({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-alexandria",
  display: "swap",
});

const plex = IBM_Plex_Sans_Arabic({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-plex-arabic",
  display: "swap",
});

const kufi = Reem_Kufi({
  subsets: ["arabic", "latin"],
  weight: ["500", "600", "700"],
  variable: "--font-reem-kufi",
  display: "swap",
});

// adjustFontFallback: false → Next 13.5 has no fallback metrics for these newer fonts
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-bricolage",
  display: "swap",
  adjustFontFallback: false,
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
  adjustFontFallback: false,
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-jetbrains",
  display: "swap",
});

const title = "ممدوح أحمد — Fekra Premium | استوديو الخلفيات والكونسبت آرت";
const description =
  "البورتفوليو الرسمي والورش التدريبية للفنان ممدوح أحمد (Fekra Premium) — مخرج فني، مصمم خلفيات أنيميشن، وكونسبت آرتيست بخبرة +6 سنوات في 6 مسلسلات و+150 إعلان.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  keywords: [
    "ممدوح أحمد",
    "Mamdouh Ahmed",
    "فكرة بريميوم",
    "Fekra Premium",
    "ورشة Background Design",
    "ورشة Concept Art",
    "خلفيات أنيميشن",
    "Background Artist",
    "Concept Artist",
    "Character Design",
    "Visual Development",
    "The Color of Zahian",
  ],
  authors: [{ name: "Mamdouh Ahmed" }],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "ar_EG",
    url: SITE_URL,
    siteName: "Fekra Premium | فكرة بريميوم",
    title,
    description,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "ممدوح أحمد — Fekra Premium" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/og-image.jpg"] },
  icons: { icon: "/icon.jpg", apple: "/icon.jpg" },
};

export const viewport = { themeColor: "#06070c", width: "device-width", initialScale: 1 };

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Fekra Premium | فكرة بريميوم",
      inLanguage: "ar",
    },
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#org`,
      name: "Fekra Premium",
      alternateName: "فكرة بريميوم",
      url: SITE_URL,
      logo: `${SITE_URL}/art/logo.jpg`,
      sameAs: [LINKS.facebook, LINKS.instagram],
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#mamdouh`,
      name: "ممدوح أحمد",
      alternateName: "Mamdouh Ahmed",
      jobTitle: "Background Artist, Concept Artist & Visual Development Director",
      url: SITE_URL,
      image: `${SITE_URL}/art/hero-cover.webp`,
      email: "mamdouh24681@gmail.com",
      telephone: "+201014422530",
      knowsAbout: [
        "Background Design",
        "Concept Art",
        "Character Design",
        "Storyboard",
        "Visual Language",
        "Animation Direction",
      ],
      sameAs: [LINKS.mamdouhInstagram, LINKS.linkedin, LINKS.upwork, LINKS.facebook, LINKS.instagram],
      worksFor: { "@id": `${SITE_URL}/#org` },
    },
    {
      "@type": "Course",
      name: "ورشة Background Design و Concept Art وبناء اللغة البصرية",
      inLanguage: "ar",
      description:
        "ورشة أونلاين تفاعلية بعدد محدود لتأسيس المنظور والإضاءة وتصميم الخلفيات، وبناء Visual Language خاصة وتحليل الاستايلات للمبتدئين والمتقدمين.",
      provider: { "@id": `${SITE_URL}/#org` },
      instructor: { "@id": `${SITE_URL}/#mamdouh` },
      hasCourseInstance: { "@type": "CourseInstance", courseMode: "online" },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${alexandria.variable} ${plex.variable} ${kufi.variable} ${bricolage.variable} ${instrumentSerif.variable} ${mono.variable}`}
    >
      <body className="font-plex antialiased selection:bg-amber-cinema selection:text-white">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}
