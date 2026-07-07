import { getArticles } from "@/lib/articles";

export default function BlogPage() {
  const articles = getArticles("pt");

  return (
    <>
      <h1>Blog</h1>

      {articles.map((article) => (
        <article key={article.slug}>
          <h2>{article.title}</h2>
          <p>{article.description}</p>
        </article>
      ))}
    </>
  );
}