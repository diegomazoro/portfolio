import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Diego Mazo — Product Builder",
  description:
    "Personal portfolio of Diego Mazo. Building products at the intersection of technology, design, and business.",
  openGraph: {
    title: "Diego Mazo — Product Builder",
    description:
      "Personal portfolio of Diego Mazo. Building products at the intersection of technology, design, and business.",
    url: "https://diegomazo.xyz",
    siteName: "Diego Mazo",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Diego Mazo — Product Builder",
    description:
      "Personal portfolio of Diego Mazo. Building products at the intersection of technology, design, and business.",
  },
  metadataBase: new URL("https://diegomazo.xyz"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
