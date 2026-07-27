import Image from "next/image";

const benefits = [
  { icon: "⭐", label: "4,7 no iFood" },
  { icon: "🛵", label: "Delivery em Mandaguari" },
  { icon: "🔥", label: "Preparado na hora" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-rd-black">
      {/* Brilho quente único e sutil, atrás do lanche */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_800px_600px_at_72%_50%,rgba(196,140,50,0.22),transparent_70%)]" />

      <div className="relative mx-auto grid min-h-screen max-w-[1600px] grid-cols-1 content-center items-center pt-16 sm:pt-[88px] lg:content-normal lg:grid-cols-[1fr_1.15fr]">
        {/* ESQUERDA */}
        <div className="relative z-20 flex flex-col justify-center gap-5 px-4 py-8 sm:gap-6 sm:px-6 sm:py-10 lg:px-20">
          {/* Selo premium, discreto */}
          <span className="inline-flex w-fit items-center gap-2 border border-rd-yellow/70 px-3 py-1.5 font-body text-xs font-semibold uppercase tracking-wider text-rd-yellow sm:px-4 sm:py-2 sm:text-sm">
            🏆 O hot dog #1 de Mandaguari
          </span>

          {/* Headline — texto fixo */}
          <h1 className="font-display text-4xl uppercase leading-[0.9] text-rd-white sm:text-6xl lg:text-7xl">
            O hot dog
            <br />
            <span className="text-rd-yellow">que faz</span>
            <br />
            barulho
          </h1>

          {/* Descrição — texto fixo */}
          <p className="max-w-md font-body text-base leading-relaxed text-rd-white/70 sm:text-lg">
            Qualidade em cada detalhe. Dos ingredientes ao preparo, tudo é pensado para entregar um hot dog que surpreende no sabor e na experiência.
          </p>

          {/* Barra de benefícios, leve e sem caixas */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-body text-xs text-rd-white/55 sm:text-sm">
            {benefits.map((b) => (
              <div
                key={b.label}
                className="group inline-flex items-center gap-2 transition-colors duration-300 hover:text-rd-yellow"
              >
                <span
                  className="inline-block text-base transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-110"
                  aria-hidden
                >
                  {b.icon}
                </span>
                <span>{b.label}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 sm:gap-5">
            <a
              href="#cardapio"
              className="bg-rd-yellow px-6 py-3 font-display text-base uppercase tracking-wide text-rd-black shadow-[4px_4px_0_0_#fff] transition-all duration-300 hover:-translate-y-1 hover:shadow-[8px_8px_0_0_#fff] sm:px-8 sm:py-4 sm:text-lg sm:shadow-[6px_6px_0_0_#fff] sm:hover:shadow-[10px_10px_0_0_#fff]"
            >
              Começar meu pedido
            </a>
            <a
              href="#sobre"
              className="border-2 border-rd-white/70 px-6 py-3 font-display text-base uppercase tracking-wide text-rd-white transition duration-300 hover:border-rd-white hover:bg-rd-white hover:text-rd-black sm:px-8 sm:py-4 sm:text-lg"
            >
              Conheça a Rock Dog
            </a>
          </div>
        </div>

        {/* DIREITA — lanche é o protagonista */}
        <div className="relative flex h-[40vh] items-center justify-center sm:h-[48vh] lg:h-full">
          {/* Sombra natural abaixo do lanche */}
          <div className="pointer-events-none absolute bottom-[16%] left-1/2 h-8 w-[50%] -translate-x-1/2 rounded-full bg-black/60 blur-xl sm:h-10 sm:blur-2xl" />

          <div
            className="relative h-full w-full p-6 sm:p-8 lg:p-12"
            style={{
              maskImage:
                "radial-gradient(ellipse 72% 72% at center, black 62%, transparent 100%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 72% 72% at center, black 62%, transparent 100%)",
            }}
          >
            {/* TODO: substituir pelo asset final do hot dog */}
            <Image
              src="/hero-rockdog.png"
              alt="Hot dog artesanal Rock Dog com duas salsichas, bacon crocante e batata palha"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-contain object-[calc(50%-2px)_center] drop-shadow-[0_40px_50px_rgba(0,0,0,.7)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}