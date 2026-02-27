import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#about" },
  { label: "Branches", href: "#branches" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-md border-b border-white/5">
      <div className="max-w-[1280px] mx-auto flex items-center justify-between px-8 py-5">
        <a
          href="#"
          className="font-['Playfair_Display',serif] text-white text-[22px] tracking-[0.08em]"
          style={{ fontWeight: 700 }}
        >
          TEHARI <span className="text-[#C6A75E]">GHAR</span>
        </a>
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-['Poppins',sans-serif] text-[13px] text-white/50 hover:text-white tracking-[0.15em] uppercase transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>
        <button
          className="md:hidden text-white/70 hover:text-white transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-black/95 backdrop-blur-lg border-t border-white/5 px-8 pb-6 pt-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-4 font-['Poppins',sans-serif] text-[13px] text-white/50 hover:text-white tracking-[0.15em] uppercase transition-colors border-b border-white/5 last:border-0"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
