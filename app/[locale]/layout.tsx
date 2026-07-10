import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Locale } from "@/lib/i18n";

type Props = {
  children: React.ReactNode;

  params: Promise<{
    locale: Locale;
  }>;
};

export default async function LocaleLayout({
  children,
  params,
}: Props) {
  const { locale } = await params;

  return (
    <>
      <Header locale={locale} />

      <main className="flex-1 pt-20">
        {children}
      </main>

      <Footer />
    </>
  );
}