type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;

  return (
    <>
      <h1>RoutineSoft</h1>

      <p>
        Idioma atual: {locale}
      </p>

      <p>
        Desenvolvimento de software, automações e soluções web.
      </p>
    </>
  );
}