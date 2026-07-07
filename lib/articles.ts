import fs from "fs";
import path from "path";
import matter from "gray-matter";

type Article = {
  title: string;
  description: string;
  date: string;
  author: string;
  slug: string;
};

const contentDirectory = path.join(process.cwd(), "content");

export function getArticles(locale: string): Article[] {
  const articlesFolders = fs.readdirSync(contentDirectory);

  return articlesFolders.map((folder) => {
    const filePath = path.join(
      contentDirectory,
      folder,
      `${locale}.mdx`
    );

    const fileContent = fs.readFileSync(filePath, "utf-8");

    const { data } = matter(fileContent);

    return {
      title: data.title,
      description: data.description,
      date: data.date,
      author: data.author,
      slug: data.slug,
    };
  });
}

export function getArticleBySlug(
  slug: string,
  locale: string
) {
  const articlesFolders = fs.readdirSync(contentDirectory);

  for (const folder of articlesFolders) {
    const filePath = path.join(
      contentDirectory,
      folder,
      `${locale}.mdx`
    );

    const fileContent = fs.readFileSync(filePath, "utf-8");

    const { data, content } = matter(fileContent);

    if (data.slug === slug) {
      return {
        title: data.title,
        description: data.description,
        date: data.date,
        author: data.author,
        slug: data.slug,
        content,
      };
    }
  }

  return null;
}