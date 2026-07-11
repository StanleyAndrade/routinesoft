import { NextRequest, NextResponse } from "next/server";

const locales = ["pt", "en"];

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Ignora arquivos estáticos e APIs
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // Se já possui o locale na URL, continua normalmente
  const hasLocale = locales.some(
    (locale) =>
      pathname === `/${locale}` ||
      pathname.startsWith(`/${locale}/`)
  );

  if (hasLocale) {
    return NextResponse.next();
  }

  // Detecta o idioma do navegador
  const acceptLanguage = request.headers.get("accept-language") ?? "";

  const preferredLocale = acceptLanguage.toLowerCase().startsWith("pt")
    ? "pt"
    : "en";

  // Redireciona para /pt ou /en
  return NextResponse.redirect(
    new URL(`/${preferredLocale}${pathname}`, request.url)
  );
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};