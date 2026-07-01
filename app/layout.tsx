import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://adongreenenergy.in"),
  title: {
    default: "ADON Green Energy | EPC Specialist for Compressed Biogas (CBG) Plants in India",
    template: "%s | ADON Green Energy",
  },
  description:
    "ADON is India's specialist EPC company delivering end-to-end Compressed Biogas (CBG) plant solutions — from design, procurement, and construction to commissioning. SATAT registered, serving Gujarat, Haryana & Uttarakhand.",
  keywords: [
    "CBG plant",
    "Compressed Biogas",
    "EPC company India",
    "biogas plant manufacturer",
    "SATAT scheme",
    "MNRE subsidy",
    "biogas purification",
    "VPSA",
    "anaerobic digestion",
    "bio-fertilizer",
    "green energy India",
    "Ahmedabad",
  ],
  authors: [{ name: "ADON Equipments Pvt. Ltd." }],
  creator: "ADON Equipments Pvt. Ltd.",
  publisher: "ADON Equipments Pvt. Ltd.",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://adongreenenergy.in",
    siteName: "ADON Green Energy",
    title: "ADON Green Energy | EPC Specialist for CBG Plants in India",
    description:
      "End-to-end Compressed Biogas plant solutions — design, procurement, construction & commissioning. SATAT registered EPC partner.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ADON Green Energy | CBG Plant EPC Specialist",
    description: "India's specialist EPC company for Compressed Biogas plants.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://adongreenenergy.in/#organization",
                  "name": "ADON Equipments Pvt. Ltd.",
                  "alternateName": "ADON Green Energy",
                  "url": "https://adongreenenergy.in",
                  "logo": "https://adongreenenergy.in/images/company/about.png",
                  "description": "ADON is India's specialist EPC company delivering end-to-end Compressed Biogas (CBG) plant solutions — from design, procurement, and construction to commissioning.",
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+91 98XXX XXXXX",
                    "contactType": "sales",
                    "email": "projects@adongreenenergy.in"
                  }
                },
                {
                  "@type": "LocalBusiness",
                  "@id": "https://adongreenenergy.in/#localbusiness",
                  "name": "ADON Green Energy - Corporate Office",
                  "image": "https://adongreenenergy.in/images/company/about.png",
                  "telephone": "+91 98XXX XXXXX",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Pending Exact Address",
                    "addressLocality": "Ahmedabad",
                    "addressRegion": "Gujarat",
                    "addressCountry": "IN"
                  },
                  "url": "https://adongreenenergy.in"
                }
              ]
            })
          }}
        />
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
