import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MenuSection from "@/components/MenuSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex flex-1 flex-col">
        <Hero />
        <MenuSection />
        <ContactSection />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
}