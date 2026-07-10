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
  metadataBase: new URL("https://routinesoft.com"),

  title: {
    default: "RoutineSoft",
    template: "%s | RoutineSoft",
  },

  description:
    "Desenvolvimento de aplicativos, sites e softwares.",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "RoutineSoft",
    description:
      "Desenvolvimento de aplicativos, sites e softwares.",
    siteName: "RoutineSoft",
    type: "website",
    locale: "pt_BR",
  },

  twitter: {
    card: "summary_large_image",
    title: "RoutineSoft",
    description:
      "Desenvolvimento de aplicativos, sites e softwares.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}