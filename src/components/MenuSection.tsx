"use client";

import Image from "next/image";
import { useState } from "react";
import { menu } from "@/data/menu";
import { useCart } from "@/context/CartContext";
import type { MenuItem } from "@/types/menu";

const categories: { key: MenuItem["categoria"] | "todos"; label: string }[] = [
  { key: "todos", label: "Todos" },
  { key: "frango", label: "Frango" },
  { key: "carne", label: "Carne" },
  { key: "vegano", label: "Vegano" },
];

export default function MenuSection() {
  const [filter, setFilter] = useState<(typeof categories)[number]["key"]>("todos");
  const { addItem } = useCart();
  const filtered = filter === "todos" ? menu : menu.filter((i) => i.categoria === filter);

  return (
    <section id="cardapio" className="bg-rd-white py-20 text-rd-black">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <h2 className="font-display text-4xl uppercase text-rd-black sm:text-5xl">Cardápio</h2>

        <div className="mt-8 flex flex-wrap gap-3" role="tablist" aria-label="Categorias do cardápio">
          {categories.map((c) => (
            <button
              key={c.key}
              role="tab"
              aria-selected={filter === c.key}
              onClick={() => setFilter(c.key)}
              className={`rounded-full border-2 border-rd-black px-5 py-2 font-body text-sm font-bold uppercase transition ${
                filter === c.key ? "bg-rd-black text-rd-white" : "text-rd-black hover:bg-rd-black/5"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        <ul className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <li key={item.id} className="group flex flex-col overflow-hidden rounded-2xl border-2 border-rd-black/10 bg-white">
              <div className="relative aspect-[4/3] bg-rd-black/5">
                {/* TODO: substituir pelo asset final do lanche */}
                <Image src={item.image} alt={item.nome} fill className="object-cover" />
                <span className="absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-rd-yellow font-display text-sm text-rd-black">
                  {String(item.numero).padStart(2, "0")}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-xl uppercase">{item.nome}</h3>
                <p className="mt-2 font-body text-sm text-rd-black/60">
                  {item.ingredientes.join(" · ")}
                  {!item.prensado && " · Sem prensar"}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-display text-xl text-rd-black">
                    R$ {item.price.toFixed(2).replace(".", ",")}
                  </span>
                  <button
                    onClick={() => addItem(item)}
                    className="rounded-full bg-rd-yellow px-5 py-2 font-body text-sm font-bold uppercase transition hover:bg-rd-black hover:text-rd-yellow"
                  >
                    Adicionar
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}