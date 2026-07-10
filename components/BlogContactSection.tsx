type Props = {
  locale: "pt" | "en";
};

export default function BlogContactSection({
  locale,
}: Props) {
  const content =
    locale === "pt"
      ? {
          title: "Vamos conversar sobre seu projeto?",
          description:
            "Se você precisa de um site, landing page, sistema ou aplicativo, posso ajudar desde o planejamento até a publicação.",
          whatsapp: "Solicitar orçamento pelo WhatsApp",
          name: "Nome",
          email: "E-mail",
          phone: "Telefone",
          message: "Conte um pouco sobre seu projeto...",
          button: "Enviar orçamento",
        }
      : {
          title: "Let's talk about your project",
          description:
            "If you need a website, landing page, software or mobile app, I can help from planning to deployment.",
          whatsapp: "Request a quote on WhatsApp",
          name: "Name",
          email: "Email",
          phone: "Phone",
          message: "Tell me about your project...",
          button: "Send quote request",
        };

  return (
    <section
      id="contact"
      className="mt-20 rounded-3xl border border-white/10 bg-black/40 p-10"
    >
      <h2 className="mb-4 text-center text-4xl font-bold text-white">
        {content.title}
      </h2>

      <p className="mx-auto mb-8 max-w-2xl text-center text-gray-400">
        {content.description}
      </p>

      <div className="mb-12 flex justify-center">
        <a
          href="https://wa.me/5521992002356"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 px-8 py-4 font-semibold text-white transition hover:scale-105"
        >
          {/* SVG */}
          <span>{content.whatsapp}</span>
        </a>
      </div>

      <form
        className="mx-auto flex max-w-xl flex-col gap-5"
        action="https://formsubmit.co/527894bd84d24a9d8d96773ae35a4128"
        method="POST"
      >
        <input
          type="text"
          name="Name"
          placeholder={content.name}
          required
          className="rounded-xl border border-white/10 bg-black/50 px-5 py-3 text-white"
        />

        <input
          type="email"
          name="Email"
          placeholder={content.email}
          required
          className="rounded-xl border border-white/10 bg-black/50 px-5 py-3 text-white"
        />

        <input
          type="tel"
          name="Phone"
          placeholder={content.phone}
          required
          className="rounded-xl border border-white/10 bg-black/50 px-5 py-3 text-white"
        />

        <textarea
          name="Message"
          rows={5}
          placeholder={content.message}
          className="rounded-xl border border-white/10 bg-black/50 px-5 py-3 text-white"
        />

        <input type="hidden" name="_subject" value="Lead Blog RoutineSoft" />
        <input type="hidden" name="_captcha" value="false" />

        <button
          type="submit"
          className="rounded-full bg-gradient-to-r from-green-500 to-emerald-600 py-4 font-semibold text-white transition hover:opacity-90"
        >
          {content.button}
        </button>
      </form>
    </section>
  );
}