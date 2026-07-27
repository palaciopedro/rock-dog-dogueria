"use client";

import { createContext, useContext, useMemo, useState } from "react";
import type { CartItem, MenuItem } from "@/types/menu";

type Step = "cart" | "checkout" | "confirmed";

interface CartContextValue {
  items: CartItem[];
  isOpen: boolean;
  step: Step;
  total: number;
  count: number;
  addItem: (item: MenuItem) => void;
  removeItem: (id: string) => void;
  updateQty: (id: string, qty: number) => void;
  openCart: () => void;
  closeCart: () => void;
  goToCheckout: () => void;
  goToCart: () => void;
  confirmOrder: () => void;
  reset: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<Step>("cart");

  const addItem = (item: MenuItem) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) => (i.id === item.id ? { ...i, qty: i.qty + 1 } : i));
      }
      return [...prev, { ...item, qty: 1 }];
    });
    setIsOpen(true);
  };

  const removeItem = (id: string) => setItems((prev) => prev.filter((i) => i.id !== id));

  const updateQty = (id: string, qty: number) => {
    if (qty <= 0) return removeItem(id);
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, qty } : i)));
  };

  const total = useMemo(() => items.reduce((sum, i) => sum + i.price * i.qty, 0), [items]);
  const count = useMemo(() => items.reduce((sum, i) => sum + i.qty, 0), [items]);

  const value: CartContextValue = {
    items,
    isOpen,
    step,
    total,
    count,
    addItem,
    removeItem,
    updateQty,
    openCart: () => setIsOpen(true),
    closeCart: () => setIsOpen(false),
    goToCheckout: () => setStep("checkout"),
    goToCart: () => setStep("cart"),
    confirmOrder: () => setStep("confirmed"),
    reset: () => {
      setItems([]);
      setStep("cart");
      setIsOpen(false);
    },
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart deve ser usado dentro de CartProvider");
  return ctx;
}