"use client";

import { usePathname, useRouter } from "next/navigation";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  function changeLanguage(locale: string) {
    const segments = pathname.split("/");

    segments[1] = locale;

    router.push(segments.join("/"));
  }

  return (
    <div>
      <button
        onClick={() => changeLanguage("pt")}
      >
        🇧🇷 PT
      </button>

      <button
        onClick={() => changeLanguage("en")}
      >
        🇺🇸 EN
      </button>
    </div>
  );
}