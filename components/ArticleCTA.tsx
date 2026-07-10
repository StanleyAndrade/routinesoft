import Link from "next/link";
import { Locale } from "@/lib/i18n";

type Props = {
  locale: Locale;
};

export default function ArticleCTA({ locale }: Props) {
  const text =
    locale === "pt"
      ? {
          title: "Gostou deste conteúdo?",
          description:
            "Desenvolvemos sites, aplicativos e sistemas personalizados para empresas de todos os portes.",
          button: "Solicitar orçamento",
        }
      : {
          title: "Enjoying this article?",
          description:
            "We build websites, mobile apps and custom software for businesses.",
          button: "Request a Quote",
        };

  return (
    <section className="my-14 rounded-3xl border border-green-500/30 bg-gradient-to-br from-green-500/10 to-emerald-600/10 p-10 text-center">

      <h2 className="mb-4 text-3xl font-bold text-white">
        {text.title}
      </h2>

      <p className="mx-auto mb-8 max-w-2xl text-gray-300">
        {text.description}
      </p>

      <Link
        href="#myform"
        className="
        inline-flex
        rounded-full
        bg-green-500
        px-8
        py-4
        font-semibold
        text-white
        transition
        hover:scale-105
        hover:bg-green-600
      "
      >
        {text.button}
      </Link>

    </section>
  );
}