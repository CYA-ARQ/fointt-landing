import { MessageCircle, Phone } from "lucide-react";
import { CONTACT_CALL_URL, CONTACT_WHATSAPP_URL } from "../content";

type ContactButtonsProps = {
  dark?: boolean;
  includeExplore?: boolean;
};

export default function ContactButtons({
  dark = false,
  includeExplore = false,
}: ContactButtonsProps) {
  const primaryClass = dark
    ? "bg-black text-white hover:bg-neutral-800"
    : "bg-white text-black hover:bg-neutral-200";
  const secondaryClass = dark
    ? "border-black/15 bg-black/5 text-black hover:bg-black hover:text-white"
    : "border-white/15 bg-white/10 text-white hover:bg-white hover:text-black";

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
      {includeExplore ? (
        <a
          href="#explorar"
          className={`inline-flex items-center justify-center rounded-full border px-5 py-3 text-sm font-normal transition ${secondaryClass}`}
        >
          explora espacios
        </a>
      ) : null}
      <a
        href={CONTACT_WHATSAPP_URL}
        className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-normal transition ${primaryClass}`}
        target="_blank"
        rel="noreferrer"
      >
        <MessageCircle className="h-4 w-4" aria-hidden="true" />
        chatea con nosotros
      </a>
      <a
        href={CONTACT_CALL_URL}
        className={`inline-flex items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-normal transition ${secondaryClass}`}
      >
        <Phone className="h-4 w-4" aria-hidden="true" />
        Llamame!
      </a>
    </div>
  );
}
