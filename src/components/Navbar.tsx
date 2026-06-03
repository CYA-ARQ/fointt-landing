import { ArrowUpRight } from "lucide-react";
import { navLinks } from "../content";
import FointtMark from "./FointtMark";

export default function Navbar() {
  return (
    <header className="absolute left-0 right-0 top-0 z-20 px-5 pt-5 sm:px-6 md:px-10 md:pt-6">
      <nav className="flex items-center justify-between gap-4">
        <a
          href="#inicio"
          className="flex min-h-14 items-center rounded-full bg-neutral-900/90 px-3 py-2 backdrop-blur transition hover:bg-neutral-800/90 sm:px-5"
          aria-label="fointt inicio"
        >
          <FointtMark
            variant="icon"
            sizeClass="h-10 w-10 sm:hidden"
          />
          <FointtMark
            variant="wordmark"
            sizeClass="hidden h-8 w-auto sm:block"
          />
        </a>

        <div className="hidden items-center gap-1 rounded-full bg-neutral-900/90 px-3 py-2 backdrop-blur md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-5 py-2 text-sm font-normal text-neutral-300 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#registro"
          className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-normal text-black transition-colors hover:bg-neutral-200 sm:px-6"
        >
          <span className="hidden sm:inline">registrar evento</span>
          <span className="sm:hidden">registrar</span>
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </nav>
    </header>
  );
}
