"use client";

import { useState, type FormEvent } from "react";
import { useCart } from "@/context/CartContext";

interface Errors {
  name?: string;
  phone?: string;
  address?: string;
}

const WHATSAPP_NUMBER = "5544999173299";

export default function CheckoutForm({ total, onBack }: { total: number; onBack: () => void }) {
  const { items, confirmOrder } = useCart();
  const [deliveryType, setDeliveryType] = useState<"entrega" | "retirada">("entrega");
  const [payment, setPayment] = useState<"pix" | "cartao" | "dinheiro">("pix");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState<Errors>({});

  const formatPhone = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 11);
    if (digits.length <= 2) return digits;
    if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const address = String(data.get("address") || "").trim();

    const nextErrors: Errors = {};
    if (name.length < 3) nextErrors.name = "Informe seu nome completo";
    if (!/^\d{10,11}$/.test(phone.replace(/\D/g, ""))) nextErrors.phone = "Telefone inválido";
    if (deliveryType === "entrega" && address.length < 8) nextErrors.address = "Informe o endereço completo";

    if (Object.keys(nextErrors).length > 0) return setErrors(nextErrors);

    const lines = [
      "Olá! Gostaria de fazer o seguinte pedido na *Rock Dog Dogueria*:",
      "",
      ...items.map(
        (item) =>
          `• ${item.numero.toString().padStart(2, "0")} - ${item.nome} x${item.qty} - R$ ${(item.price * item.qty)
            .toFixed(2)
            .replace(".", ",")}`
      ),
      "",
      `*Total: R$ ${total.toFixed(2).replace(".", ",")}*`,
      "",
      deliveryType === "entrega" ? "*Entrega*" : "*Retirada no local*",
      ...(deliveryType === "entrega" ? [`Endereço: ${address}`] : []),
      `Pagamento: ${payment === "pix" ? "Pix" : payment === "cartao" ? "Cartão" : "Dinheiro"}`,
      "",
      `Nome: ${name}`,
    ];

    const message = encodeURIComponent(lines.join("\n"));
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
    confirmOrder();
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-1 flex-col overflow-y-auto px-6 py-5">
      <button type="button" onClick={onBack} className="mb-4 self-start font-body text-sm text-rd-white/60 hover:text-rd-yellow">
        ← Voltar ao carrinho
      </button>

      <div className="space-y-4">
        <Field label="Nome completo" name="name" error={errors.name} autoComplete="name" />
        <Field
          label="WhatsApp"
          name="phone"
          type="tel"
          error={errors.phone}
          autoComplete="tel"
          placeholder="(44) 99999-9999"
          value={phone}
          onChange={(e) => setPhone(formatPhone(e.target.value))}
        />

        <fieldset>
          <legend className="mb-2 font-body text-sm font-bold uppercase text-rd-white/80">Como você quer receber?</legend>
          <div className="flex gap-2">
            {[
              ["entrega", "Entrega"],
              ["retirada", "Retirar no local"],
            ].map(([value, label]) => (
              <button
                type="button"
                key={value}
                onClick={() => setDeliveryType(value as typeof deliveryType)}
                className={`flex-1 rounded-lg border-2 py-2 font-body text-sm font-bold uppercase transition ${
                  deliveryType === value
                    ? "border-rd-yellow bg-rd-yellow text-rd-black"
                    : "border-rd-white/20 text-rd-white/70 hover:border-rd-white/50"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </fieldset>

        {deliveryType === "entrega" && (
          <Field label="Endereço de entrega" name="address" error={errors.address} autoComplete="street-address" />
        )}

        <fieldset>
          <legend className="mb-2 font-body text-sm font-bold uppercase text-rd-white/80">Pagamento</legend>
          <div className="flex gap-2">
            {[
              ["pix", "Pix"],
              ["cartao", "Cartão"],
              ["dinheiro", "Dinheiro"],
            ].map(([value, label]) => (
              <button
                type="button"
                key={value}
                onClick={() => setPayment(value as typeof payment)}
                className={`flex-1 rounded-lg border-2 py-2 font-body text-sm font-bold uppercase transition ${
                  payment === value
                    ? "border-rd-yellow bg-rd-yellow text-rd-black"
                    : "border-rd-white/20 text-rd-white/70 hover:border-rd-white/50"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </fieldset>
      </div>

      <div className="mt-auto pt-6">
        <div className="mb-4 flex items-center justify-between font-display text-xl">
          <span>Total</span>
          <span className="text-rd-yellow">R$ {total.toFixed(2).replace(".", ",")}</span>
        </div>
        <button type="submit" className="flex w-full items-center justify-center gap-2 bg-rd-yellow py-3.5 font-display text-lg uppercase text-rd-black transition hover:bg-rd-white">
          Enviar pedido pelo WhatsApp
        </button>
        <p className="mt-3 text-center font-body text-xs text-rd-white/40">
          Você será redirecionado ao WhatsApp com o pedido já preenchido.
        </p>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  error,
  type = "text",
  ...rest
}: {
  label: string;
  name: string;
  error?: string;
  type?: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label htmlFor={name} className="mb-1 block font-body text-sm font-bold uppercase text-rd-white/80">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
        className={`w-full rounded-lg border-2 bg-rd-black px-4 py-2.5 font-body text-rd-white placeholder:text-rd-white/30 focus:outline-none focus:ring-2 focus:ring-rd-yellow ${
          error ? "border-rd-red" : "border-rd-white/20"
        }`}
        {...rest}
      />
      {error && (
        <p id={`${name}-error`} className="mt-1 font-body text-xs text-rd-red">
          {error}
        </p>
      )}
    </div>
  );
}