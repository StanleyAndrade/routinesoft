import { getDictionary } from "@/lib/i18n";

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;

  const dictionary = getDictionary(locale);

  return (
    <>
      <h1>
        {dictionary.home.title}
      </h1>

      <p>
        {dictionary.home.description}
      </p>
    </>
  );
}