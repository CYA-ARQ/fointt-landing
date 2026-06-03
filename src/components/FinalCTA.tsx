import { Compass } from "lucide-react";
import ContactButtons from "./ContactButtons";

export default function FinalCTA() {
  return (
    <section className="bg-black">
      <div className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-6 md:py-14 lg:px-10">
        <div className="rounded-[2rem] border border-white/10 bg-white text-black">
          <div className="mx-auto max-w-5xl px-5 py-10 text-center sm:px-8 md:py-14">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/[0.04] px-4 py-2 text-xs text-black/62">
              <Compass className="h-4 w-4" aria-hidden="true" />
              reserva o registra tu evento
            </span>
            <h2 className="text-4xl font-medium leading-tight tracking-normal sm:text-5xl md:text-6xl">
              listo para encontrar tu point?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-black/65 md:text-lg">
              explora espacios o habla con nosotros. la coordinación final se
              hace por WhatsApp o llamada directa.
            </p>
            <div className="mx-auto mt-9 max-w-2xl">
              <ContactButtons dark includeExplore />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
