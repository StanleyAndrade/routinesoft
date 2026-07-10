import Link from "next/link";
import { Locale } from "@/lib/i18n";

type Props = {
  locale: Locale;
};

export default function WhatsAppButton({ locale }: Props) {
  const message =
    locale === "pt"
      ? "Olá, RoutineSoft. Eu gostaria de um orçamento."
      : "Hello, RoutineSoft. I would like to request a quote.";

  return (
    <Link
      href={`https://wa.me/5521992002356?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="
        group
        fixed
        bottom-6
        right-6
        z-50
        flex
        h-14
        w-14
        items-center
        justify-center
        rounded-full
        bg-green-500
        text-white
        shadow-lg
        transition-all
        duration-300
        hover:scale-110
        hover:bg-green-600
        hover:shadow-xl
      "
    >
      <svg
        className="h-7 w-7"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M20.52 3.48A11.82 11.82 0 0012.06 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.16 1.6 5.97L0 24l6.31-1.65a11.86 11.86 0 005.75 1.47h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.16-3.45-8.44zM12.07 21.8a9.8 9.8 0 01-5-1.37l-.36-.21-3.75.98 1-3.65-.24-.38a9.77 9.77 0 01-1.5-5.25c0-5.4 4.4-9.8 9.81-9.8 2.62 0 5.08 1.02 6.93 2.87a9.73 9.73 0 012.87 6.93c0 5.4-4.4 9.8-9.8 9.8zm5.38-7.34c-.29-.15-1.72-.85-1.99-.95-.27-.1-.47-.15-.67.15-.2.3-.77.95-.94 1.15-.17.2-.34.22-.63.08-.29-.15-1.24-.46-2.35-1.48-.87-.77-1.46-1.72-1.63-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.08-.79.37-.27.29-1.03 1.01-1.03 2.46s1.06 2.86 1.21 3.06c.15.2 2.09 3.19 5.07 4.47.71.31 1.26.49 1.69.63.71.23 1.36.19 1.87.12.57-.09 1.72-.71 1.97-1.39.25-.68.25-1.27.17-1.39-.07-.12-.27-.19-.56-.34z" />
      </svg>

      <span
        className="
          pointer-events-none
          absolute
          bottom-full
          right-0
          mb-3
          rounded-lg
          bg-gray-900
          px-3
          py-2
          text-sm
          whitespace-nowrap
          text-white
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
        "
      >
        {locale === "pt"
          ? "Fale conosco!"
          : "Chat with us!"}
      </span>
    </Link>
  );
}