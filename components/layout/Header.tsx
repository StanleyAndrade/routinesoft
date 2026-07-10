"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import LanguageSwitcher from "../LanguageSwitcher";

type Props = {
  locale: string;
};

export default function Header({ locale }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header
        className="
          fixed
          top-0
          left-0
          z-50
          w-full
          border-b
          border-white/10
          bg-black/30
          backdrop-blur-md
        "
      >
        <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6">

          {/* Logo */}
          <Link href={`/${locale}`}>
            <Image
              src="/newlogo.svg"
              alt="RoutineSoft"
              width={200}
              height={200}
              priority
            />
          </Link>

          {/* MENU DESKTOP */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8 text-gray-200 font-medium">

              <li>
                <Link
                  href={`/${locale}`}
                  className="hover:text-white transition"
                >
                  {locale === "pt" ? "Início" : "Home"}
                </Link>
              </li>

              <li>
                <Link
                  href={`/${locale}/blog`}
                  className="hover:text-white transition"
                >
                  Blog
                </Link>
              </li>

              <li>
                <Link href={`/${locale}/quote`}>
                  {locale === "pt" ? "Solicitar orçamento" : "Get a Quote"}
                </Link>
              </li>

              <li>
                <LanguageSwitcher />
              </li>

              <li>
                <a
                  href="https://wa.me/5521992002356"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-gray-200"
                >
                  {locale === "pt"
                    ? "Orçamento"
                    : "Get a Quote"}
                </a>
              </li>

            </ul>
          </nav>

          {/* BOTÃO HAMBÚRGUER */}
          <button
            onClick={() => setOpen(!open)}
            className="flex flex-col gap-1.5 md:hidden"
            aria-label="Abrir menu"
          >
            <span className="h-0.5 w-6 rounded bg-white"></span>
            <span className="h-0.5 w-6 rounded bg-white"></span>
            <span className="h-0.5 w-6 rounded bg-white"></span>
          </button>

        </div>
      </header>

      {/* MENU MOBILE */}
      {open && (
        <nav
          className="
            fixed
            top-24
            left-0
            z-40
            flex
            w-full
            flex-col
            gap-6
            border-t
            border-white/10
            bg-black/90
            p-8
            backdrop-blur-md
            md:hidden
          "
        >
          <Link
            href={`/${locale}`}
            onClick={() => setOpen(false)}
            className="text-gray-200 hover:text-white"
          >
            {locale === "pt" ? "Início" : "Home"}
          </Link>

          <Link
            href={`/${locale}/blog`}
            onClick={() => setOpen(false)}
            className="text-gray-200 hover:text-white"
          >
            Blog
          </Link>

          <LanguageSwitcher />

          <a
            href="https://wa.me/5521992002356"
            target="_blank"
            rel="noopener noreferrer"
            className="
              rounded-full
              bg-white
              px-5
              py-3
              text-center
              font-semibold
              text-black
            "
          >
            {locale === "pt"
              ? "Solicitar orçamento"
              : "Get a Quote"}
          </a>
        </nav>
      )}
    </>
  );
}