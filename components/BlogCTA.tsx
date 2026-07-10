import Link from "next/link";

type Props = {
  title?: string;
  description?: string;
};

export default function BlogCTA({
  title = "Precisa de um site profissional?",
  description = "Solicite um orçamento gratuito. Respondemos rapidamente pelo WhatsApp.",
}: Props) {
  return (
    <section className="my-12 rounded-2xl border border-green-500/30 bg-gradient-to-r from-green-500/10 to-emerald-500/10 p-8">
      <h2 className="mb-3 text-2xl font-bold text-white">
        {title}
      </h2>

      <p className="mb-6 text-gray-300">
        {description}
      </p>

      <div className="flex flex-wrap gap-4">
        <a
          href="https://wa.me/5521992002356?text=Olá,%20gostaria%20de%20um%20orçamento."
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-green-500 px-6 py-3 font-semibold text-white transition hover:bg-green-600"
        >
          Solicitar orçamento
        </a>

        <Link
          href="#contact"
          className="rounded-full border border-white/20 px-6 py-3 text-white transition hover:bg-white/10"
        >
          Falar comigo depois
        </Link>
      </div>
    </section>
  );
}