import { getArticles } from "@/lib/articles";
import Link from "next/link";

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function BlogPage({ params }: Props) {
  const { locale } = await params;
  const articles = getArticles(locale);

  return (
    <>
      <h1>Blog</h1>

      {articles.map((article) => (
        <article key={article.slug}>
            <Link href={`/blog/${article.slug}`}>
                <h2>{article.title}</h2>
            </Link>
        </article>
      ))}
    </>
  );
}