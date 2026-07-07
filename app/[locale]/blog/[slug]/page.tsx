import { getArticleBySlug } from "@/lib/articles";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    slug: string;
    locale: string;
  }>;
};

export default async function ArticlePage({ params }: Props) {
  const { slug, locale } = await params;

  const article = getArticleBySlug(
    slug,
    locale
  );

  if (!article) {
    notFound();
  }

  return (
    <article>
      <h1>{article.title}</h1>

      <p>{article.description}</p>

      <small>
        Por {article.author}
      </small>

      <div>
        {article.content}
      </div>
    </article>
  );
}