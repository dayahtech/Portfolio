import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNav = () => setIsOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/8 bg-space-950/62 backdrop-blur-2xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#home"
          className="font-display text-sm font-semibold uppercase tracking-[0.28em] text-cyan-100"
        >
          Portfolio
        </a>

        <div className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm text-slate-300 transition hover:bg-white/8 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-full border border-white/12 bg-white/8 text-white md:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            className="border-t border-white/8 bg-space-950/95 px-4 py-4 backdrop-blur-xl md:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <div className="mx-auto grid max-w-7xl gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={handleNav}
                  className="rounded-2xl border border-white/8 bg-white/6 px-4 py-3 text-sm text-slate-200"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
