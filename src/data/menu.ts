import type { AddOn, Drink, MenuItem } from "@/types/menu";

export const menu: MenuItem[] = [
  { id: "01", numero: 1, nome: "Rolling Stones", categoria: "frango", ingredientes: ["1 Salsicha", "Purê", "Molhos Especiais", "Alface", "Tomate", "Batata Palha"], prensado: true, price: 24, image: "/menu/01-rolling-stones.png" },
  { id: "02", numero: 2, nome: "Barão Vermelho", categoria: "frango", ingredientes: ["1 Salsicha", "Bacon", "Purê", "Molhos Especiais", "Alface", "Tomate", "Batata Palha"], prensado: true, price: 29, image: "/menu/02-barao-vermelho.png" },
  { id: "03", numero: 3, nome: "Led Zeppelin", categoria: "frango", ingredientes: ["2 Salsichas", "Purê", "Molhos Especiais", "Alface", "Tomate", "Batata Palha"], prensado: true, price: 27, image: "/menu/03-led-zeppelin.png" },
  { id: "04", numero: 4, nome: "Titãs", categoria: "frango", ingredientes: ["2 Salsichas", "Bacon", "Purê", "Molhos Especiais", "Alface", "Tomate", "Batata Palha"], prensado: true, price: 32, image: "/menu/04-titas.png" },
  { id: "05", numero: 5, nome: "Beatles", categoria: "frango", ingredientes: ["1 Salsicha", "Frango Desfiado", "Purê", "Molhos Especiais", "Alface", "Tomate", "Batata Palha"], prensado: true, price: 30, image: "/menu/05-beatles.png" },
  { id: "06", numero: 6, nome: "Raimundos", categoria: "frango", ingredientes: ["1 Salsicha", "Frango Desfiado", "Bacon", "Purê", "Molhos Especiais", "Alface", "Tomate", "Batata Palha"], prensado: true, price: 35, image: "/menu/06-raimundos.png" },
  { id: "07", numero: 7, nome: "Metallica", categoria: "frango", ingredientes: ["2 Salsichas", "Frango Desfiado", "Purê", "Molhos Especiais", "Alface", "Tomate", "Batata Palha"], prensado: true, price: 33, image: "/menu/07-metallica.png" },
  { id: "08", numero: 8, nome: "Legião Urbana", categoria: "frango", ingredientes: ["2 Salsichas", "Frango Desfiado", "Bacon", "Purê", "Molhos Especiais", "Alface", "Tomate", "Batata Palha"], prensado: true, price: 38, image: "/menu/08-legiao-urbana.png" },
  { id: "09", numero: 9, nome: "Nirvana", categoria: "frango", ingredientes: ["2 Salsichas", "Frango Desfiado", "Bacon", "Catupiry", "Purê", "Molhos Especiais", "Vinagrete", "Alface", "Milho Verde", "Batata Palha"], prensado: true, price: 43, image: "/menu/09-nirvana.png" },
  { id: "10", numero: 10, nome: "Raul Seixas", categoria: "frango", ingredientes: ["2 Salsichas", "Frango Desfiado", "Bacon", "Queijo", "Purê", "Molhos Especiais", "Vinagrete", "Alface", "Milho Verde", "Batata Palha"], prensado: true, price: 43, image: "/menu/10-raul-seixas.png" },
  { id: "11", numero: 11, nome: "Kiss", categoria: "carne", ingredientes: ["1 Salsicha", "Carne Moída", "Purê", "Molhos Especiais", "Alface", "Tomate", "Batata Palha"], prensado: true, price: 30, image: "/menu/11-kiss.png" },
  { id: "12", numero: 12, nome: "Charlie Brown", categoria: "carne", ingredientes: ["1 Salsicha", "Carne Moída", "Bacon", "Purê", "Molhos Especiais", "Alface", "Tomate", "Batata Palha"], prensado: true, price: 35, image: "/menu/12-charlie-brown.png" },
  { id: "13", numero: 13, nome: "Guns N'Roses", categoria: "carne", ingredientes: ["2 Salsichas", "Carne Moída", "Purê", "Molhos Especiais", "Alface", "Tomate", "Batata Palha"], prensado: true, price: 33, image: "/menu/13-guns-n-roses.png" },
  { id: "14", numero: 14, nome: "Ramones", categoria: "carne", ingredientes: ["2 Salsichas", "Carne Moída", "Bacon", "Purê", "Molhos Especiais", "Alface", "Tomate", "Batata Palha"], prensado: true, price: 38, image: "/menu/14-ramones.png" },
  { id: "15", numero: 15, nome: "Pink Floyd", categoria: "carne", ingredientes: ["2 Salsichas", "Carne Moída", "Bacon", "Catupiry", "Purê", "Molhos Especiais", "Vinagrete", "Alface", "Milho Verde", "Batata Palha"], prensado: true, price: 43, image: "/menu/15-pink-floyd.png" },
  { id: "16", numero: 16, nome: "Rita Lee", categoria: "carne", ingredientes: ["2 Salsichas", "Carne Moída", "Bacon", "Queijo", "Purê", "Molhos Especiais", "Vinagrete", "Alface", "Milho Verde", "Batata Palha"], prensado: true, price: 43, image: "/menu/16-rita-lee.png" },
  { id: "17", numero: 17, nome: "Queen Vegetariano", categoria: "vegano", ingredientes: ["1 Salsicha de Soja", "Purê", "Molhos Especiais", "Vinagrete", "Alface", "Milho Verde", "Batata Palha"], prensado: true, price: 38, image: "/menu/17-queen-vegetariano.png" },
  { id: "18", numero: 18, nome: "Queen Vegano", categoria: "vegano", ingredientes: ["1 Salsicha de Soja", "Molho de Tomate", "Maionese Vegana", "Vinagrete", "Alface", "Milho Verde", "Batata Palha"], prensado: true, price: 38, image: "/menu/18-queen-vegano.png" },
  { id: "19", numero: 19, nome: "Black Sabbath", categoria: "carne", ingredientes: ["2 Salsichas", "Purê", "Molhos Especiais", "Vinagrete", "Alface", "Milho Verde", "Batata Palha"], prensado: false, price: 34, image: "/menu/19-black-sabbath.png" },
];

export const addOns: AddOn[] = [
  { id: "bacon", nome: "Bacon", price: 6 },
  { id: "carne-moida", nome: "Carne Moída", price: 6 },
  { id: "catupiry", nome: "Catupiry", price: 6 },
  { id: "frango-desfiado", nome: "Frango Desfiado", price: 6 },
  { id: "milho-verde", nome: "Milho Verde", price: 2 },
  { id: "sache-molho-verde", nome: "Sachê Molho Verde", price: 2 },
  { id: "salsicha", nome: "Salsicha", price: 4 },
  { id: "salsicha-soja", nome: "Salsicha de Soja", price: 6 },
  { id: "salsicha-frango", nome: "Salsicha de Frango", price: 5 },
  { id: "queijo", nome: "Queijo", price: 6 },
  { id: "vinagrete", nome: "Vinagrete", price: 3 },
];

export const drinks: Drink[] = [
  { id: "refri-lata", nome: "Refrigerante Lata", price: 7 },
  { id: "refri-600", nome: "Refrigerante 600ml", price: 10 },
];