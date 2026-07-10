import { getArticles } from "@/lib/articles";
import Link from "next/link";
import { Metadata } from "next";
import { Locale } from "@/lib/i18n";
import WhatsAppButton from "@/components/WhatsappButton";

type Props = {
  params: Promise<{
    locale: Locale;
  }>;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;

  if (locale === "pt") {
    return {
      title: "Blog",
      description:
        "Artigos sobre desenvolvimento de software.",
    };
  }

  return {
    title: "Blog",
    description:
      "Software development articles.",
  };
} // <-- ESTA CHAVE ESTAVA FALTANDO

export default async function BlogPage({
  params,
}: Props) {
  const { locale } = await params;

  const articles = getArticles(locale);

  return (
    <main className="mx-auto max-w-4xl px-6 py-10">
      <h1 className="mb-10 text-4xl font-bold">
        Blog
      </h1>

      {articles.map((article) => (
        <article
          key={article.slug}
          className="mb-8 border-b border-white/10 pb-8"
        >
          <Link
            href={`/${locale}/blog/${article.slug}`}
          >
            <h2 className="mb-2 text-2xl font-semibold hover:text-green-500">
              {article.title}
            </h2>
          </Link>

          <p className="text-gray-400">
            {article.description}
          </p>
        </article>
      ))}
      <WhatsAppButton locale={locale} />
    </main>
  );
}