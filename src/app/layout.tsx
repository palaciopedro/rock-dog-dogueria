import { Anton, Barlow } from "next/font/google";
import { CartProvider } from "@/context/CartContext";
import "./globals.css";

const anton = Anton({ subsets: ["latin"], weight: "400", variable: "--font-anton" });
const barlow = Barlow({ subsets: ["latin"], weight: ["400", "600", "700"], variable: "--font-barlow" });

export const metadata = {
  title: "Rock Dog Dogueria | Hot Dog e Burger Artesanal",
  description: "Hot dogs e burgers gourmet com atitude rock'n roll. Peça online e receba em casa.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${anton.variable} ${barlow.variable}`}>
      <body className="flex min-h-screen flex-col bg-rd-black font-body text-rd-white antialiased">
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}