export interface MenuItem {
  id: string;
  numero: number;
  nome: string;
  categoria: "frango" | "carne" | "vegano";
  ingredientes: string[];
  prensado: boolean;
  price: number;
  image: string;
}

export interface AddOn {
  id: string;
  nome: string;
  price: number;
}

export interface Drink {
  id: string;
  nome: string;
  price: number;
}

export interface CartItem extends MenuItem {
  qty: number;
}