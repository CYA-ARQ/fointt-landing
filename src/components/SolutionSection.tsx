import { Sparkles } from "lucide-react";
import { featureHighlights } from "../content";
import ContactButtons from "./ContactButtons";

export default function SolutionSection() {
  return (
    <section id="reserva" className="bg-black">
      <div className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-6 md:py-16 lg:px-10">
        <div className="border-t border-white/10 pt-10 md:pt-12">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <span className="eyebrow">
                <Sparkles className="h-4 w-4" aria-hidden="true" />
                reserva rapido
              </span>
              <h2 className="max-w-3xl text-4xl font-medium leading-tight tracking-normal text-white sm:text-5xl md:text-6xl">
                encuentra el point y cierralo directo
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/68 md:text-lg">
                fointt te ayuda a ubicar espacios para tu plan y coordinar sin
                vueltas. explora opciones, deja tu evento o habla con nosotros.
              </p>
            </div>

            <div className="md:justify-self-end">
              <ContactButtons includeExplore />
            </div>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {featureHighlights.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="flex min-h-20 items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-black">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <p className="text-sm leading-snug text-white/75">
                    {item.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
