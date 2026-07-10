"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LanguageSwitcher() {
  const pathname = usePathname();

  function getHref(locale: "pt" | "en") {
    const segments = pathname.split("/");

    // troca apenas o idioma
    segments[1] = locale;

    // Se estiver em um artigo:
    // /pt/blog/algum-slug
    // volta para a listagem do blog
    if (segments.length > 3 && segments[2] === "blog") {
      return `/${locale}/blog`;
    }

    return segments.join("/");
  }

  return (
    <nav className="flex gap-3">
      <Link href={getHref("pt")}>🇧🇷 PT</Link>

      <Link href={getHref("en")}>🇺🇸 EN</Link>
    </nav>
  );
}