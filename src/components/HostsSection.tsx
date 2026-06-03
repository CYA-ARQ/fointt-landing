import { Building2 } from "lucide-react";
import ContactButtons from "./ContactButtons";

export default function HostsSection() {
  return (
    <section id="anfitriones" className="bg-black">
      <div className="section-shell">
        <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-neutral-950 p-5 sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <span className="eyebrow">
              <Building2 className="h-4 w-4" aria-hidden="true" />
              para locales
            </span>
            <h2 className="text-3xl font-medium leading-tight tracking-normal text-white sm:text-4xl md:text-5xl">
              ¿tienes un point para publicar?
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-white/64">
              si tienes un local, cancha, rooftop, salón o espacio disponible,
              habla con nosotros y lo revisamos para sumarlo a fointt.
            </p>
            <div className="mt-7">
              <ContactButtons />
            </div>
          </div>

          <div className="relative min-h-[280px] overflow-hidden rounded-[1.5rem] border border-white/10 bg-black">
            <img
              src="/assets/fointt-picture2.png"
              alt="mockups de la app fointt para locales"
              className="absolute inset-0 h-full w-full object-cover object-left opacity-85"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/25 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
              {["perfil visible", "contacto directo", "más reservas"].map((label) => (
                <span
                  key={label}
                  className="rounded-full border border-white/10 bg-black/60 px-4 py-2 text-sm text-white/78 backdrop-blur"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
