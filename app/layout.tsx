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
