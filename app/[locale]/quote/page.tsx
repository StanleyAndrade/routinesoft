import { Locale } from "@/lib/i18n";
import Link from "next/link";

type Props = {
  params: Promise<{
    locale: Locale;
  }>;
};

export default async function QuotePage({
  params,
}: Props) {
  const { locale } = await params;

  const t =
    locale === "pt"
      ? {
          title: "Solicite um orçamento",
          subtitle:
            "Conte um pouco sobre seu projeto. Respondemos o mais rápido possível e sem compromisso.",

          whatsapp:
            "Prefere falar agora? Chame no WhatsApp.",

          whatsappButton:
            "Conversar pelo WhatsApp",

          formTitle:
            "Ou envie seus dados",

          name: "Nome",
          email: "E-mail",
          phone: "Telefone",
          message:
            "Conte um pouco sobre seu projeto...",

          button: "Solicitar orçamento",
        }
      : {
          title: "Request a Quote",

          subtitle:
            "Tell us about your project. We'll get back to you as soon as possible with no obligation.",

          whatsapp:
            "Prefer to chat now? Contact us on WhatsApp.",

          whatsappButton:
            "Chat on WhatsApp",

          formTitle:
            "Or send your information",

          name: "Name",
          email: "Email",
          phone: "Phone",

          message:
            "Tell us about your project...",

          button: "Request Quote",
        };

  return (
    <section className="mx-auto max-w-4xl px-6 py-28">
      <div className="text-center">
        <h1 className="mb-5 text-5xl font-bold text-white">
          {t.title}
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-400">
          {t.subtitle}
        </p>
      </div>

      <div className="mb-16 rounded-3xl border border-green-500/20 bg-green-500/5 p-8 text-center">
        <h2 className="mb-5 text-2xl font-semibold text-white">
          {t.whatsapp}
        </h2>

        <Link
          href="https://wa.me/5521992002356?text=Olá,%20gostaria%20de%20um%20orçamento."
          target="_blank"
          className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 px-8 py-4 font-semibold text-white transition hover:scale-105"
        >
          💬 {t.whatsappButton}
        </Link>
      </div>

      <div className="rounded-3xl border border-white/10 bg-black/40 p-10">
        <h2 className="mb-8 text-center text-3xl font-bold text-white">
          {t.formTitle}
        </h2>

        <form
          className="flex flex-col gap-5"
          action="https://formsubmit.co/527894bd84d24a9d8d96773ae35a4128"
          method="POST"
        >
          <input
            type="text"
            name="Name"
            placeholder={t.name}
            required
            className="rounded-xl border border-white/10 bg-black/50 px-5 py-4 text-white"
          />

          <input
            type="email"
            name="Email"
            placeholder={t.email}
            required
            className="rounded-xl border border-white/10 bg-black/50 px-5 py-4 text-white"
          />

          <input
            type="tel"
            name="Phone"
            placeholder={t.phone}
            required
            className="rounded-xl border border-white/10 bg-black/50 px-5 py-4 text-white"
          />

          <textarea
            rows={6}
            name="Message"
            placeholder={t.message}
            className="rounded-xl border border-white/10 bg-black/50 px-5 py-4 text-white"
          />

          <input
            type="hidden"
            name="_subject"
            value="Lead - RoutineSoft"
          />

          <input
            type="hidden"
            name="_captcha"
            value="false"
          />

          <input type="hidden" name="Product" value="Quote Page" />

          <input type="hidden" name="_next" value="https://www.routinesoft.com/en/thank-you" />

          <button
            type="submit"
            className="mt-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 py-4 text-lg font-semibold text-white transition hover:scale-[1.02]"
          >
            {t.button}
          </button>
        </form>
      </div>
    </section>
  );
}