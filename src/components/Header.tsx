import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: "Sobre o TirzePro", href: "#sobre" },
    { label: "Ingredientes", href: "#ingredientes" },
    { label: "Review", href: "#reviews" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <>
      <div className="bg-primary text-primary-foreground text-center py-2 text-sm font-semibold">
        Domínio Verificado | Compra 100% Segura
      </div>
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container mx-auto flex items-center justify-between py-4 px-4">
          <a href="#" className="text-xl font-bold text-foreground">TirzePro</a>
          <nav className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {l.label}
              </a>
            ))}
            <a href="#kits" className="gradient-yellow text-primary-foreground px-5 py-2 rounded-full text-sm font-bold hover:opacity-90 transition-opacity">
              COMPRAR AGORA!
            </a>
          </nav>
          <button className="md:hidden text-foreground" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {menuOpen && (
          <nav className="md:hidden border-t border-border px-4 pb-4 flex flex-col gap-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-muted-foreground py-2" onClick={() => setMenuOpen(false)}>
                {l.label}
              </a>
            ))}
            <a href="#kits" className="gradient-yellow text-primary-foreground px-5 py-2 rounded-full text-sm font-bold text-center" onClick={() => setMenuOpen(false)}>
              COMPRAR AGORA!
            </a>
          </nav>
        )}
      </header>
    </>
  );
};

export default Header;
