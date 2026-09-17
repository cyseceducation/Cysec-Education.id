import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlowEffect from "@/components/GlowEffect";
import { AuthProvider } from "@/lib/auth";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: "%s | CYSEC",
  },
  description: site.description,
  keywords: [
    "cybersecurity",
    "keamanan siber",
    "belajar hacking etis",
    "ethical hacking",
    "penetration testing",
    "roadmap keamanan siber",
    "komunitas cybersecurity",
    "cyber security indonesia",
  ],
  applicationName: site.name,
  authors: [{ name: site.name }],
  creator: site.name,
  category: "technology",
  manifest: "/manifest.json",
  icons: {
    icon: [{ url: "/icon.png", sizes: "64x64", type: "image/png" }],
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: site.name,
    url: site.url,
    title: site.title,
    description: site.description,
    images: [
      {
        url: site.ogImage,
        width: 1200,
        height: 630,
        alt: site.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: [site.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#08157D",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${site.url}/#organization`,
      name: site.name,
      url: site.url,
      logo: `${site.url}/icons/icon-512.png`,
      email: site.email,
      sameAs: [
        site.social.github,
        site.social.instagram,
        site.social.tiktok,
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      name: site.name,
      url: site.url,
      description: site.description,
      publisher: { "@id": `${site.url}/#organization` },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full bg-black text-white antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <AuthProvider>
          <div className="min-h-screen bg-black relative">
            <GlowEffect />
            <Navbar />
            <main className="pt-20 relative z-10">{children}</main>
            <Footer />
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}