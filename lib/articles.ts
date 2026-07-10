import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { locales, type Locale } from "./i18n";

export type Article = {
  id: string;
  locale: Locale;

  title: string;
  description: string;

  date: string;
  author: string;

  slug: string;

  content: string;
};

const contentDirectory = path.join(process.cwd(), "content");

function readArticles(): Article[] {
  const folders = fs.readdirSync(contentDirectory);

  const articles: Article[] = [];

  for (const folder of folders) {
    for (const locale of locales) {
      const filePath = path.join(
        contentDirectory,
        folder,
        `${locale}.mdx`
      );

      if (!fs.existsSync(filePath)) {
        continue;
      }

      const file = fs.readFileSync(filePath, "utf-8");

      const { data, content } = matter(file);

      articles.push({
        id: folder, // vamos usar o nome da pasta como identificador
        locale,

        title: data.title,
        description: data.description,

        date: data.date,
        author: data.author,

        slug: data.slug,

        content,
      });
    }
  }

  return articles;
}

export function getArticles(locale: Locale): Article[] {
  return readArticles().filter(
    (article) => article.locale === locale
  );
}

export function getArticleBySlug(
  slug: string,
  locale: Locale
) {
  return (
    readArticles().find(
      (article) =>
        article.slug === slug &&
        article.locale === locale
    ) ?? null
  );
}

export function getAllArticles() {
  return readArticles();
}

export function getTranslatedSlug(
  currentSlug: string,
  currentLocale: Locale,
  targetLocale: Locale
) {
  const articles = readArticles();

  const current = articles.find(
    (article) =>
      article.slug === currentSlug &&
      article.locale === currentLocale
  );

  if (!current) {
    return null;
  }

  const translated = articles.find(
    (article) =>
      article.id === current.id &&
      article.locale === targetLocale
  );

  return translated?.slug ?? null;
}