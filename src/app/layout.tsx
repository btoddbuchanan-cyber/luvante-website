import type { Metadata } from "next";
import { Raleway, Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const raleway = Raleway({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const roboto = Roboto({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Luvante | Sustainable Elevated EV Charging for Fleets, Streets & Councils",
    template: "%s | Luvante",
  },
  description:
    "Discover elevated, modular EV charging systems for local councils, parking lots, stratas, and small fleets. Faster installs, lower costs, and a sustainable future.",
  metadataBase: new URL("https://www.luvante.com"),
  openGraph: {
    title: "Luvante | Sustainable Elevated EV Charging",
    description:
      "Elevated, modular EV charging systems. 20% less cost, 40% faster, 60% less carbon, 90% less trenching.",
    url: "https://www.luvante.com",
    siteName: "Luvante",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luvante | Sustainable Elevated EV Charging",
    description:
      "Elevated, modular EV charging systems for fleets, streets & councils.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${raleway.variable} ${roboto.variable}`}>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
