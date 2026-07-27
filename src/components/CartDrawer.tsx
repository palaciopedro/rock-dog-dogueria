"use client";

import { useCart } from "@/context/CartContext";
import CheckoutForm from "./CheckoutForm";

export default function CartDrawer() {
  const { isOpen, closeCart, items, updateQty, removeItem, total, step, goToCheckout, goToCart, reset } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <button
        aria-label="Fechar carrinho"
        onClick={closeCart}
        className="absolute inset-0 bg-black/60"
      />
      <aside className="relative flex h-full w-full max-w-md flex-col bg-rd-black text-rd-white shadow-2xl">
        <header className="flex items-center justify-between border-b border-rd-yellow/20 px-4 py-4 sm:px-6 sm:py-5">
          <h2 className="font-display text-xl uppercase text-rd-yellow sm:text-2xl">
            {step === "cart" && "Seu carrinho"}
            {step === "checkout" && "Finalizar pedido"}
            {step === "confirmed" && "Pedido confirmado"}
          </h2>
          <button onClick={closeCart} aria-label="Fechar carrinho e continuar pedindo" className="font-body text-xs font-semibold uppercase tracking-wide text-rd-white/70 underline-offset-4 hover:text-rd-yellow hover:underline sm:text-sm">
            Continuar pedindo
          </button>
        </header>

        {step === "cart" && (
          <>
            <div className="flex-1 overflow-y-auto px-4 py-4 sm:px-6">
              {items.length === 0 ? (
                <p className="mt-10 text-center font-body text-rd-white/60">Seu carrinho está vazio.</p>
              ) : (
                <ul className="space-y-4">
                  {items.map((item) => (
                    <li key={item.id} className="flex items-center gap-3 border-b border-rd-white/10 pb-4 sm:gap-4">
                      <div className="min-w-0 flex-1">
                        <p className="truncate font-display text-base uppercase">{item.nome}</p>
                        <p className="font-body text-sm text-rd-white/50">
                          R$ {item.price.toFixed(2).replace(".", ",")}
                        </p>
                      </div>
                      <div className="flex shrink-0 items-center gap-2">
                        <button
                          onClick={() => updateQty(item.id, item.qty - 1)}
                          aria-label={`Diminuir quantidade de ${item.nome}`}
                          className="flex h-9 w-9 items-center justify-center rounded-full border border-rd-white/30 text-rd-white hover:border-rd-yellow hover:text-rd-yellow"
                        >
                          −
                        </button>
                        <span className="w-5 text-center font-body">{item.qty}</span>
                        <button
                          onClick={() => updateQty(item.id, item.qty + 1)}
                          aria-label={`Aumentar quantidade de ${item.nome}`}
                          className="flex h-9 w-9 items-center justify-center rounded-full border border-rd-white/30 text-rd-white hover:border-rd-yellow hover:text-rd-yellow"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        aria-label={`Remover ${item.nome}`}
                        className="flex shrink-0 h-9 w-9 items-center justify-center rounded-full text-lg text-rd-white/70 transition hover:bg-rd-red/10 hover:text-rd-red"
                      >
                        🗑
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {items.length > 0 && (
              <footer className="border-t border-rd-yellow/20 px-4 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-5 sm:px-6">
                <div className="mb-4 flex items-center justify-between font-display text-xl">
                  <span>Total</span>
                  <span className="text-rd-yellow">R$ {total.toFixed(2).replace(".", ",")}</span>
                </div>
                <button
                  onClick={goToCheckout}
                  className="w-full bg-rd-yellow py-3.5 font-display text-lg uppercase text-rd-black transition hover:bg-rd-white"
                >
                  Finalizar Pedido
                </button>
              </footer>
            )}
          </>
        )}

        {step === "checkout" && <CheckoutForm total={total} onBack={goToCart} />}

        {step === "confirmed" && (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
            <span className="text-5xl" aria-hidden>🌭🤘</span>
            <h3 className="font-display text-2xl uppercase text-rd-yellow">Pedido enviado!</h3>
            <p className="font-body text-rd-white/70">
              Abrimos o WhatsApp com seu pedido já preenchido. É só conferir e enviar a mensagem — a partir daí a Rock Dog confirma tudo por lá.
            </p>
            <button
              onClick={reset}
              className="mt-4 bg-rd-yellow px-6 py-3 font-display uppercase text-rd-black hover:bg-rd-white"
            >
              Fazer novo pedido
            </button>
          </div>
        )}
      </aside>
    </div>
  );
}