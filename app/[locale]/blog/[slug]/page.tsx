import { getArticleBySlug } from "@/lib/articles";
import { type Locale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import WhatsAppButton from "@/components/WhatsappButton";
import { mdxComponents } from "@/components/mdx-components";

type Props = {
  params: Promise<{
    slug: string;
    locale: Locale;
  }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { locale, slug } = await params;

  const article = getArticleBySlug(slug, locale);

  if (!article) {
    return {};
  }

  return {
    title: article.title,
    description: article.description,

    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
    },

    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
    },
  };
}

export default async function ArticlePage({
  params,
}: Props) {
  const { slug, locale } = await params;

  const article = getArticleBySlug(slug, locale);

  if (!article) {
    notFound();
  }

  const formattedDate = new Date(article.date).toLocaleDateString(
    locale === "pt" ? "pt-BR" : "en-US",
    {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }
  );

  const words = article.content
    .replace(/[#_*`>-]/g, "")
    .split(/\s+/)
    .filter(Boolean).length;

  const readingTime = Math.max(1, Math.ceil(words / 200));

  return (
    <article className="mx-auto max-w-3xl px-6 py-10">
      <h1 className="mb-4 text-4xl font-bold">
        {article.title}
      </h1>

      <p className="mb-6 text-lg">
        {article.description}
      </p>

      <div className="mb-8 flex flex-wrap gap-2 text-sm text-gray-300">
        <span>
          {locale === "pt" ? "Por" : "By"} {article.author}
        </span>

        <span>•</span>

        <span>{formattedDate}</span>

        <span>•</span>

        <span>
          {readingTime}{" "}
          {locale === "pt"
            ? "min de leitura"
            : "min read"}
        </span>
      </div>

      <hr className="mb-8" />

      <div className="prose max-w-none">
        <MDXRemote source={article.content} components={mdxComponents} />
      </div>
      <WhatsAppButton locale={locale} />
    </article>
  );
}