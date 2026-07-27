"use client";

import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const { count, openCart } = useCart();

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-rd-yellow/20 bg-rd-black/95 backdrop-blur">
      <nav className="mx-auto flex max-w-[1600px] items-center justify-between px-4 py-4 sm:px-6 sm:py-6 lg:px-20">
        <a href="#" className="font-display text-2xl tracking-wide text-rd-yellow sm:text-3xl lg:text-4xl">
          ROCK DOG <span className="text-rd-white">DOGUERIA</span>
        </a>

        <button
          onClick={openCart}
          aria-label={`Carrinho, ${count} itens`}
          className="relative shrink-0 rounded-full border-2 border-rd-yellow p-2 text-rd-yellow transition hover:bg-rd-yellow hover:text-rd-black sm:p-2.5"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5 sm:h-6 sm:w-6"
            aria-hidden
          >
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>
          {count > 0 && (
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-rd-red text-xs font-bold text-white">
              {count}
            </span>
          )}
        </button>
      </nav>
    </header>
  );
}