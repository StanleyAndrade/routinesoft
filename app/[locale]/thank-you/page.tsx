import Link from "next/link";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You",
  description: "Thank you for contacting RoutineSoft.",
  robots: {
    index: false,
    follow: false,
  },
};

const translations = {
  pt: {
    title: "Obrigado!",
    subtitle: "Recebemos sua solicitação.",
    description:
      "Nossa equipe recebeu suas informações e entrará em contato em até 24 horas para entender melhor seu projeto e apresentar a melhor solução.",
    button: "Voltar para a página inicial",
  },

  en: {
    title: "Thank you!",
    subtitle: "We have received your request.",
    description:
      "Our team has received your information and will contact you within 24 hours to better understand your project and provide the best solution.",
    button: "Back to Home",
  },
};

export default async function ThankYouPage({
  params,
}: {
  params: Promise<{ locale: "pt" | "en" }>;
}) {
  const { locale } = await params;

  const t = translations[locale] ?? translations.pt;

  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6">
      <div className="max-w-xl rounded-3xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur">
        <div className="mb-6 text-6xl">✅</div>

        <h1 className="mb-3 text-4xl font-bold text-white">
          {t.title}
        </h1>

        <h2 className="mb-6 text-xl text-green-400">
          {t.subtitle}
        </h2>

        <p className="mb-10 leading-8 text-gray-300">
          {t.description}
        </p>

        <Link
          href={`/${locale}`}
          className="inline-block rounded-full bg-gradient-to-r from-green-500 to-emerald-600 px-8 py-3 font-semibold text-black transition hover:opacity-90"
        >
          {t.button}
        </Link>
      </div>
    </main>
  );
}