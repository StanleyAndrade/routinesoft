import { Metadata } from "next";
import WhatsAppButton from "@/components/WhatsappButton";

import {
  getDictionary,
  type Locale,
} from "@/lib/i18n";

type Props = {
  params: Promise<{
    locale: Locale;
  }>;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: "pt" | "en" }>;
}): Promise<Metadata> {
  const { locale } = await params;

  if (locale === "pt") {
    return {
      title: "RoutineSoft",
      description:
        "Desenvolvimento de aplicativos, sites e softwares.",
    };
  }

  return {
    title: "RoutineSoft",
    description:
      "Software, websites and mobile app development.",
  };
}

export default async function HomePage({
  params,
}: Props) {
  const { locale } = await params;

  const dictionary = getDictionary(locale);

  // Todo o conteúdo textual da landing page, no mesmo padrão do generateMetadata.
  let content;

  if (locale === "pt") {
    content = {
      ctaButton: "Obtenha um orçamento gratuito",
      whatWeDo: {
        title: "O que desenvolvemos",
        items: ["Aplicativo Android e iOS", "Software/SAAS", "Site Profissional"],
      },
      howItWorks: {
        title: "Como",
        titleHighlight: "funciona",
        subtitle: "Da ideia à produção em três passos simples",
        steps: [
          {
            title: "Reunião no Google Meet",
            description: "Nos diga quais são as necessidades da sua empresa",
          },
          {
            title: "Desenvolvemos para você",
            description: "Nossos programadores qualificados desenvolverão para você",
          },
          {
            title: "Pronto",
            description: "Seu projeto está pronto para você usar",
          },
        ],
      },
      whatWeOffer: {
        title: "O que",
        titleHighlight: "oferecemos",
        cards: [
          {
            title: "Suporte 24h/7",
            description:
              "Suporte 24h/7 com uma equipe de programadores via Whatsapp, chat SMS ou telefone.",
          },
          {
            title: "Manutenção mensal",
            description:
              "Manteremos seu projeto atualizado, corrigindo bugs e fazendo melhorias e mantendo protegido contra ataques cibernéticos.",
          },
          {
            title: "Tecnologia moderna e confiável",
            description: "Nossos projetos são criados por programadores altamente qualificados.",
          },
        ],
      },
      clients: {
        title: "Clientes",
        titleHighlight: "Satisfeitos",
        list: [
          {
            title: "Rara App",
            subtitle: "Aplicativo Android e iOS",
            stack: "Cliente: Igreja Comunhão Rara\nMobile: React Native\nBackend: Node.js\nCloud: AWS",
            href: "https://www.comunhaorara.com/pages/baixenossoapp.html",
            img: "/1.png",
          },
          {
            title: "Memorize Gifts",
            subtitle: "Página de Destino",
            stack: "Frontend: HTML, CSS, JS\nHost: Vercel",
            href: "https://www.memorizegifts.com/",
            img: "/2.png",
          },
          {
            title: "CestSeg Trabalho",
            subtitle: "Plataforma Escolar",
            stack: "Frontend: React\nBackend: Node.js\nDatabase: MongoDB",
            href: "https://app.cestsegtrabalho.com.br/",
            img: "/4.png",
          },
          {
            title: "Acota Engenharia",
            subtitle: "Site Institucional",
            stack: "Frontend: Wordpress\nHost: Hostinger",
            href: "https://acotaengenharia.com/",
            img: "/3.png",
          },
          {
            title: "Mídia Rara Rio",
            subtitle: "Formulário Interativo",
            stack: "Frontend: HTML, JS\nSMTP: Gmail",
            href: "https://midiararario.vercel.app/",
            img: "/5.png",
          },
          {
            title: "RN Clima e Peças",
            subtitle: "Manutenção de Ar Condicionado",
            stack: "Frontend: HTML, TailwindCSS, JavaScript",
            href: "https://www.rnclimaepecas.com/",
            img: "/6.png",
          },
          {
            title: "Speed Lan House",
            subtitle: "Lan House",
            stack: "Frontend: HTML, TailwindCSS, JavaScript",
            href: "https://www.speedlanhouse.com.br/",
            img: "/speedlan.png",
          },
        ],
      },
      contact: {
        title: "Fale",
        titleHighlight: "conosco",
        whatsappText: "Chamar no WhatsApp agora",
        whatsappHref:
          "https://wa.me/5521992002356?text=Ol%C3%A1%2C%20Routinesoft.%20Eu%20gostaria%20de%20um%20or%C3%A7amento",
        formIntro: "Ou preencha o formulário e entraremos em contato em 24h.",
        namePlaceholder: "Nome",
        emailPlaceholder: "Seu Email",
        phonePlaceholder: "Telefone",
      },
    };
  } else {
    content = {
      ctaButton: "Get a free quote",
      whatWeDo: {
        title: "What we build",
        items: ["Android & iOS App", "Software/SAAS", "Professional Website"],
      },
      howItWorks: {
        title: "How it",
        titleHighlight: "works",
        subtitle: "From idea to production in three simple steps",
        steps: [
          {
            title: "Meeting on Google Meet",
            description: "Tell us what your company needs",
          },
          {
            title: "We build it for you",
            description: "Our skilled developers will build it for you",
          },
          {
            title: "Ready",
            description: "Your project is ready for you to use",
          },
        ],
      },
      whatWeOffer: {
        title: "What we",
        titleHighlight: "offer",
        cards: [
          {
            title: "24/7 Support",
            description:
              "24/7 support with a team of developers via WhatsApp, SMS chat or phone.",
          },
          {
            title: "Monthly maintenance",
            description:
              "We'll keep your project updated, fixing bugs, making improvements, and protecting it against cyber attacks.",
          },
          {
            title: "Modern, reliable technology",
            description: "Our projects are built by highly qualified developers.",
          },
        ],
      },
      clients: {
        title: "Happy",
        titleHighlight: "Clients",
        list: [
          {
            title: "Rara App",
            subtitle: "Android & iOS App",
            stack: "Client: Comunhão Rara Church\nMobile: React Native\nBackend: Node.js\nCloud: AWS",
            href: "https://www.comunhaorara.com/pages/baixenossoapp.html",
            img: "/1.png",
          },
          {
            title: "Memorize Gifts",
            subtitle: "Landing Page",
            stack: "Frontend: HTML, CSS, JS\nHost: Vercel",
            href: "https://www.memorizegifts.com/",
            img: "/2.png",
          },
          {
            title: "CestSeg Trabalho",
            subtitle: "School Platform",
            stack: "Frontend: React\nBackend: Node.js\nDatabase: MongoDB",
            href: "https://app.cestsegtrabalho.com.br/",
            img: "/4.png",
          },
          {
            title: "Acota Engenharia",
            subtitle: "Institutional Website",
            stack: "Frontend: Wordpress\nHost: Hostinger",
            href: "https://acotaengenharia.com/",
            img: "/3.png",
          },
          {
            title: "Mídia Rara Rio",
            subtitle: "Interactive Form",
            stack: "Frontend: HTML, JS\nSMTP: Gmail",
            href: "https://midiararario.vercel.app/",
            img: "/5.png",
          },
          {
            title: "RN Clima e Peças",
            subtitle: "AC Maintenance",
            stack: "Frontend: HTML, TailwindCSS, JavaScript",
            href: "https://www.rnclimaepecas.com/",
            img: "/6.png",
          },
          {
            title: "Speed Lan House",
            subtitle: "Lan House",
            stack: "Frontend: HTML, TailwindCSS, JavaScript",
            href: "https://www.speedlanhouse.com.br/",
            img: "/speedlan.png",
          },
        ],
      },
      contact: {
        title: "Get in",
        titleHighlight: "touch",
        whatsappText: "Chat on WhatsApp now",
        whatsappHref:
          "https://wa.me/5521992002356?text=Hi%2C%20Routinesoft.%20I%27d%20like%20a%20quote",
        formIntro: "Or fill out the form and we'll get back to you within 24h.",
        namePlaceholder: "Name",
        emailPlaceholder: "Your Email",
        phonePlaceholder: "Phone",
      },
    };
  }

  return (
    <>


      <main className="min-h-screen flex flex-col items-center justify-start overflow-x-hidden">
        {/* Hero */}
        <section
          id="overview"
          className="hero-bg flex flex-col md:flex-row items-center justify-between text-center md:text-left pt-40 pb-0 w-full px-6 md:px-16 gap-10"
        >
          <div className="flex-1 flex flex-col items-center md:items-start justify-center">
            <h1 className="text-3xl md:text-7xl font-semibold mb-4">
              {dictionary.home.title}
            </h1>

            <p className="text-gray-300 max-w-xl mb-8 md:text-2xl">
              {dictionary.home.description}
            </p>

            <a href="#myform">
              <button className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full text-black font-semibold hover:opacity-90 transition glow-hover">
                {content.ctaButton}
              </button>
            </a>
          </div>

          <div className="flex-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/seuapp.png"
              alt="Hero Illustration"
              className="w-full max-w-lg mx-auto md:mx-0 rounded-2xl"
            />
          </div>
        </section>

        {/* O que desenvolvemos */}
        <section className="hero-bg flex flex-col items-center justify-center text-center pt-0 pb-20 w-full">
          <p className="mt-12 mb-12 text-white-400 text-4xl md:text-4xl">
            {content.whatWeDo.title}
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 md:flex-row md:flex-wrap">
            {content.whatWeDo.items.map((item) => (
              <a
                key={item}
                href="#myform"
                className="card w-full max-w-xs px-8 py-6 rounded-2xl text-center md:w-44"
              >
                <div className="text-gray-200 font-medium">{item}</div>
              </a>
            ))}
          </div>
        </section>

        {/* Como funciona */}
<section className="hero-bg w-full py-24 px-6 text-center">
  <h2 className="mb-1 text-3xl font-semibold md:text-4xl">
    {content.howItWorks.title}{" "}
    <span className="text-green-400">
      {content.howItWorks.titleHighlight}
    </span>
  </h2>

  <p className="mx-auto mb-12 max-w-xl text-gray-300">
    {content.howItWorks.subtitle}
  </p>

  <div
    className="
      mx-auto
      flex
      max-w-6xl
      flex-col
      items-center
      gap-10

      md:flex-row
      md:justify-center
      md:items-start
      md:gap-24
    "
  >
    {stepIcons.map((icon, index) => {
      const step = content.howItWorks.steps[index];

      return (
        <div
          key={step.title}
          className="
            flex
            w-full
            max-w-xs
            flex-col
            items-center
            text-center
          "
        >
          <div className="card mb-5 flex h-16 w-16 items-center justify-center rounded-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-green-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={icon}
              />
            </svg>
          </div>

          <h3 className="mb-2 text-2xl font-bold">
            {step.title}
          </h3>

          <p className="text-sm leading-7 text-gray-300">
            {step.description}
          </p>
        </div>
      );
    })}
  </div>
</section>

        {/* O que oferecemos */}
        <section id="technology" className="w-full py-24 text-center hero-bg">
          <h2 className="text-3xl md:text-4xl font-semibold mb-12">
            {content.whatWeOffer.title} <span className="text-green-400">{content.whatWeOffer.titleHighlight}</span>
          </h2>

          <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
            {content.whatWeOffer.cards.map((card) => (
              <div key={card.title} className="card w-72 p-6 rounded-2xl text-left">
                <h3 className="text-xl font-semibold mb-3 text-green-400">{card.title}</h3>
                <p className="text-gray-300 text-sm">{card.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Clientes Satisfeitos */}
        <section className="w-full py-24 bg-black/30 text-center overflow-hidden">
          <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-white">
            {content.clients.title} <span className="text-green-400">{content.clients.titleHighlight}</span>
          </h2>

          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-2 px-1">
            {content.clients.list.map((client) => (
              <a
                key={client.title}
                href={client.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 rounded-2xl p-1 text-center hover:-translate-y-2 hover:scale-105 hover:shadow-[0_0_25px_rgba(0,255,180,0.25)] transition duration-300 block"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={client.img}
                  alt={client.title}
                  className="mx-auto mb-4 w-full object-contain rounded-2xl"
                />
                <h3 className="text-lg font-semibold text-white">{client.title}</h3>
                <p className="text-green-400 text-sm mb-2">{client.subtitle}</p>
                <p className="text-gray-400 text-xs whitespace-pre-line">{client.stack}</p>
              </a>
            ))}
          </div>
        </section>

        {/* Fale conosco / Formulário */}
        <section
          id="myform"
          className="w-full bg-black/40 py-20 px-6 md:px-20 text-center text-gray-200"
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-8">
            {content.contact.title} <span className="text-green-400">{content.contact.titleHighlight}</span>
          </h2>

          <a
            href={content.contact.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-green-500/50 hover:scale-105 mb-8"
          >
            <svg
              className="w-7 h-7"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20.52 3.48A11.82 11.82 0 0012.06 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.16 1.6 5.97L0 24l6.31-1.65a11.86 11.86 0 005.75 1.47h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.16-3.45-8.44zM12.07 21.8a9.8 9.8 0 01-5-1.37l-.36-.21-3.75.98 1-3.65-.24-.38a9.77 9.77 0 01-1.5-5.25c0-5.4 4.4-9.8 9.81-9.8 2.62 0 5.08 1.02 6.93 2.87a9.73 9.73 0 012.87 6.93c0 5.4-4.4 9.8-9.8 9.8zm5.38-7.34c-.29-.15-1.72-.85-1.99-.95-.27-.1-.47-.15-.67.15-.2.3-.77.95-.94 1.15-.17.2-.34.22-.63.08-.29-.15-1.24-.46-2.35-1.48-.87-.77-1.46-1.72-1.63-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.08-.79.37-.27.29-1.03 1.01-1.03 2.46s1.06 2.86 1.21 3.06c.15.2 2.09 3.19 5.07 4.47.71.31 1.26.49 1.69.63.71.23 1.36.19 1.87.12.57-.09 1.72-.71 1.97-1.39.25-.68.25-1.27.17-1.39-.07-.12-.27-.19-.56-.34z" />
            </svg>
            <span>{content.contact.whatsappText}</span>
          </a>

          <p className="max-w-xl mx-auto text-gray-400 mb-12">
            {content.contact.formIntro}
          </p>

          <form
            className="max-w-xl mx-auto flex flex-col gap-5"
            action="https://formsubmit.co/527894bd84d24a9d8d96773ae35a4128"
            method="POST"
          >
            <input
              type="text"
              name="Name"
              placeholder={content.contact.namePlaceholder}
              required
              className="w-full bg-black/50 border border-white/10 text-gray-200 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            />
            <input
              type="email"
              name="Email"
              placeholder={content.contact.emailPlaceholder}
              required
              className="w-full bg-black/50 border border-white/10 text-gray-200 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            />
            <input
              type="tel"
              name="Tel"
              placeholder={content.contact.phonePlaceholder}
              required
              className="w-full bg-black/50 border border-white/10 text-gray-200 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            />

            <input type="hidden" name="Product" value="Home" />
            <input type="hidden" name="_subject" value="Lead - RoutineSoft" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://www.routinesoft.com/en/thank-you" />

            <button
              type="submit"
              className="mt-4 px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full text-black font-semibold hover:opacity-90 transition transform hover:-translate-y-1 duration-300 glow-hover"
            >
              {content.ctaButton}
            </button>
          </form>
        </section>
      </main>
      <WhatsAppButton locale={locale} />
    </>
  );
}

const stepIcons = [
  "M12 20h9M16.5 3.5a2.121 2.121 0 113 3L7 19l-4 1 1-4L16.5 3.5z",
  "M12 4v16m8-8H4",
  "M5 13l4 4L19 7",
];