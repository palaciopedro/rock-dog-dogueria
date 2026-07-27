const channels = [
  {
    icon: "💬",
    title: "WhatsApp",
    description: "Prefere pedir direto pelo Whatsapp? Só falar com a gente.",
    cta: "Pedir pelo WhatsApp",
    href: "https://wa.me/5544999173299",
    primary: true,
  },
  {
    icon: "🍔",
    title: "iFood",
    description: "Prefere pedir pelo aplicativo? Também estamos no iFood.",
    rating: "⭐⭐⭐⭐⭐ 4,7 no iFood",
    cta: "Abrir no iFood",
    href: "https://www.ifood.com.br/delivery/mandaguari-pr/rock-dog-dogueria-centro/4a5aa109-04ec-45c3-8b50-741a68a6dff4",
    primary: false,
  },
  {
    icon: "📸",
    title: "Instagram",
    description: "Veja lançamentos, promoções e novidades da Rock Dog.",
    cta: "Seguir no Instagram",
    href: "https://instagram.com/rock_dog_pr",
    primary: false,
  },
];

const badges = [
  "Atendimento rápido",
  "Delivery ágil",
  "Ingredientes selecionados",
  "Preparado na hora",
];

function ReviewCard() {
  return (
    <div className="relative border border-rd-yellow/20 bg-rd-white/[0.02] p-5">
      <div className="relative">
        <p className="text-lg text-rd-yellow" aria-hidden>
          ⭐⭐⭐⭐⭐
        </p>
        <p className="mt-1 font-display text-xl uppercase text-rd-white">
          4,7 no iFood
        </p>

        {/* TODO: substituir por uma avaliação real de cliente */}
        <p className="mt-4 font-body text-base italic leading-relaxed text-rd-white/75">
          "O melhor da região. Tem conceito, carinho desde o preparo até a
          entrega, é muito sabor. Lanche com identidade."
        </p>
        <p className="mt-3 font-body text-sm text-rd-white/50">— Cliente iFood</p>

        <ul className="mt-4 space-y-1.5 border-t border-rd-white/10 pt-4">
          {badges.map((b) => (
            <li key={b} className="flex items-center gap-2 font-body text-xs text-rd-white/70 sm:text-sm">
              <span className="text-rd-yellow" aria-hidden>✔</span>
              {b}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function ContactSection() {
  return (
    <section id="contato" className="scroll-mt-20 bg-rd-black py-10 sm:scroll-mt-24 sm:py-14">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-20">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-10">
          {/* ESQUERDA */}
          <div>
            <h2 className="font-display text-2xl uppercase text-rd-white sm:text-3xl">
              Peça do seu jeito
            </h2>
            <p className="mt-2 max-w-md font-body text-sm text-rd-white/60">
              Escolha o canal que preferir para falar com a Rock Dog ou
              acompanhar nossas novidades.
            </p>

            <div className="mt-4 space-y-2.5">
              {channels.map((c) => (
                <div
                  key={c.title}
                  className="group flex flex-col gap-2.5 border border-rd-white/10 p-3.5 transition-all duration-300 hover:-translate-y-1 hover:border-rd-yellow/60 hover:bg-rd-yellow/5 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-xl" aria-hidden>{c.icon}</span>
                    <div>
                      <p className="font-display text-base uppercase text-rd-white">{c.title}</p>
                      <p className="mt-0.5 max-w-xs font-body text-xs text-rd-white/60 sm:text-sm">{c.description}</p>
                      {c.rating && (
                        <p className="mt-1 font-body text-xs text-rd-yellow">{c.rating}</p>
                      )}
                    </div>
                  </div>

                  <a
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 whitespace-nowrap bg-rd-yellow px-4 py-2.5 text-center font-display text-xs uppercase tracking-wide text-rd-black transition duration-300 hover:bg-rd-white sm:text-sm"
                  >
                    {c.cta}
                  </a>
                </div>
              ))}
            </div>

            {/* Avaliação — visível apenas no mobile, entre os cards e as informações */}
            <div className="mt-5 lg:hidden">
              <ReviewCard />
            </div>

            {/* Informações da loja, discretas */}
            <dl className="mt-5 grid grid-cols-1 gap-x-8 gap-y-2 border-t border-rd-white/10 pt-5 font-body text-xs text-rd-white/55 sm:grid-cols-2 sm:text-sm">
              <div className="flex items-start gap-2">
                <span aria-hidden>📍</span>
                <span>Rua Dr Rufino Maciel, 700 – Centro, Mandaguari - PR</span>
              </div>
              <div className="flex items-start gap-2">
                <span aria-hidden>🛵</span>
                <span>Delivery em Mandaguari</span>
              </div>
              <div className="flex items-start gap-2">
                <span aria-hidden>💳</span>
                <span>Pix · Cartão · Dinheiro</span>
              </div>
              <div className="flex items-start gap-2">
                <span aria-hidden>🕒</span>
                {/* TODO: confirmar horário real de funcionamento */}
                <span>Ter a Dom · 18h às 23h</span>
              </div>
            </dl>
          </div>

          {/* DIREITA — avaliação, apenas desktop */}
          <div className="hidden lg:block">
            <ReviewCard />
          </div>
        </div>
      </div>
    </section>
  );
}