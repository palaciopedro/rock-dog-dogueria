export default function Footer() {
  return (
    <footer className="border-t border-rd-yellow/10 bg-rd-black py-8">
      <div className="mx-auto max-w-5xl px-6 text-center font-body text-sm text-rd-white/40 lg:px-8">
        © {new Date().getFullYear()} Rock Dog Dogueria. Todos os direitos reservados.
      </div>
    </footer>
  );
}