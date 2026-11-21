import type { Metadata } from "next";
import { Noto_Serif_KR } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { QuickContact } from "@/components/QuickContact";
import { allowSearchIndexing, siteDescription, siteName, siteUrl } from "@/lib/site";
import "./globals.css";

const serif = Noto_Serif_KR({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    "유민환 변호사",
    "창원 변호사",
    "창원 법률상담",
    "형사 사건",
    "민사 사건",
    "상속 가사",
    "행정 사건",
  ],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: siteUrl,
    siteName,
    title: siteName,
    description: siteDescription,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "유민환법률사무소" }],
  },
  robots: allowSearchIndexing
    ? {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-image-preview": "large",
          "max-snippet": -1,
          "max-video-preview": -1,
        },
      }
    : {
        index: false,
        follow: false,
        googleBot: {
          index: false,
          follow: false,
        },
      },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${serif.variable} min-h-screen bg-background text-foreground antialiased`}>
        <Header />
        <main className="min-h-[calc(100vh-320px)]">{children}</main>
        <Footer />
        <QuickContact />
      </body>
    </html>
  );
}
