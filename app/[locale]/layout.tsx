import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Locale } from "@/lib/i18n";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return [
    { locale: "pt" },
    { locale: "en" },
  ];
}

type Props = {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
};

export default async function LocaleLayout({
  children,
  params,
}: Props) {
  const { locale } = await params;

  if (locale !== "pt" && locale !== "en") {
    notFound();
  }

  return (
    <>
      <Header locale={locale as Locale} />

      <main>{children}</main>

      <Footer />
    </>
  );
}