import { MessageCircle } from "lucide-react";
import { CONTACT_WHATSAPP_URL, contactLinks } from "../content";
import FointtMark from "./FointtMark";

const footerLinks = [
  { label: "inicio", href: "#inicio" },
  { label: "explorar", href: "#explorar" },
  { label: "registrar evento", href: "#registro" },
  { label: "contacto", href: "#contacto" },
];

export default function Footer() {
  return (
    <footer id="contacto" className="border-t border-white/10 bg-black pb-24">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-12 sm:px-6 md:grid-cols-[1fr_1.2fr] lg:px-10">
        <div>
          <FointtMark variant="wordmark" sizeClass="h-10 w-auto" />
          <p className="mt-5 max-w-sm text-sm leading-6 text-white/58">
            te buscamos el mejor point.
          </p>
          <a
            href={CONTACT_WHATSAPP_URL}
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white/75 transition hover:border-white/25 hover:text-white"
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            chatea con nosotros
          </a>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <h3 className="text-sm font-medium text-white">links</h3>
            <div className="mt-4 grid gap-3">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-white/55 transition hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-white">contacto</h3>
            <div className="mt-4 grid gap-3">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-white/55 transition hover:text-white"
                  target={link.href.startsWith("https") ? "_blank" : undefined}
                  rel={link.href.startsWith("https") ? "noreferrer" : undefined}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-white/38">
        © 2026 fointt. todos los derechos reservados.
      </div>
    </footer>
  );
}
