import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const display = Playfair_Display({ subsets: ["latin"], variable: "--font-display", display: "swap" });

const title = "Holmenkollstafetten — Vårens vakreste eventyr";
const description =
  "Resultater, historie og statistikk fra Holmenkollstafetten i Oslo — verdens største stafett siden 1923.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "Holmenkollstafetten",
    "Oslo",
    "stafett",
    "friidrett",
    "resultater",
    "historie",
    "Bislett",
  ],
  openGraph: {
    title,
    description,
    type: "website",
    locale: "nb_NO",
    siteName: "Holmenkollstafetten",
  },
  twitter: { card: "summary_large_image", title, description },
};

export const viewport: Viewport = {
  themeColor: "#BA0C2F",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="no">
      <body className={`${inter.variable} ${display.variable} font-sans bg-no-cream text-no-ink antialiased`}>
        <Nav />
        <main className="min-h-screen pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
