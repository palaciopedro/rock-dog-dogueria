import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="sobre" className="scroll-mt-20 bg-rd-black py-14 sm:scroll-mt-24 sm:py-20">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-20">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* TEXTO */}
          <div>
            <h2 className="font-display text-4xl uppercase text-rd-white sm:text-5xl lg:text-6xl">
              Sobre <span className="text-rd-yellow">nós</span>
            </h2>
            <p className="mt-2 font-body text-base font-semibold uppercase tracking-wide text-rd-white/60 sm:text-lg">
              Rock e hot dog, a mesma paixão
            </p>

            <div className="mt-5 space-y-4 font-body text-sm leading-relaxed text-rd-white/70 sm:text-base">
              <p>
                A Rock Dog nasceu em 2022, idealizada por Angelica Bellini, com
                uma proposta simples: unir duas grandes paixões em um só
                lugar, rock e hot dog.
              </p>
              <p>
                Desde o primeiro dia, o objetivo sempre foi oferecer muito
                mais do que um lanche. Cada hot dog é preparado na hora, com
                ingredientes de qualidade, muito recheio e atenção aos
                detalhes, para proporcionar uma experiência marcante do
                primeiro ao último pedaço.
              </p>
              <p>
                Inspirada pela energia e autenticidade do rock, a Rock Dog se
                tornou um ponto de encontro para quem valoriza sabor,
                personalidade e um atendimento feito de forma próxima e
                acolhedora.
              </p>
              <p>
                Hoje, seguimos com o mesmo propósito que deu início a essa
                história: preparar hot dogs que fazem barulho e conquistar
                cada cliente a cada pedido.
              </p>
            </div>
          </div>

          {/* FOTO, com contorno exato */}
          <div className="relative mx-auto w-full max-w-[280px] sm:max-w-xs lg:max-w-sm">
            <div className="overflow-hidden border-4 border-rd-yellow">
              <Image
                src="/foto-contact.png"
                alt="Angelica Bellini, fundadora da Rock Dog Dogueria"
                width={800}
                height={1442}
                quality={100}
                className="h-full w-full object-cover grayscale-[15%]"
                />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-rd-black/40 via-transparent to-transparent" />
            </div>

            {/* Nome da fundadora */}
            <div className="absolute -top-3 left-4 border-2 border-rd-yellow bg-rd-black px-3 py-1.5">
              <span className="font-display text-xs uppercase tracking-wide text-rd-yellow sm:text-sm">
                Angelica Bellini
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}