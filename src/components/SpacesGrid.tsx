import { ArrowUpRight, Search } from "lucide-react";
import { spaceTypes } from "../content";

export default function SpacesGrid() {
  return (
    <section id="explorar" className="bg-black">
      <div className="section-shell">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <span className="eyebrow">
              <Search className="h-4 w-4" aria-hidden="true" />
              explorar fointt
            </span>
            <h2 className="text-4xl font-medium leading-tight tracking-normal text-white sm:text-5xl md:text-6xl">
              elige el point que va con tu plan
            </h2>
          </div>
          <div className="max-w-sm">
            <p className="text-sm leading-6 text-white/60">
              mira categorías rápidas y registra tu evento para que podamos
              ayudarte a cerrar la mejor opción.
            </p>
            <a
              href="#registro"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-normal text-black transition hover:bg-neutral-200"
            >
              registrar mi evento
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {spaceTypes.map((space, index) => (
            <article
              key={space.name}
              className={`group relative min-h-[175px] overflow-hidden rounded-3xl border border-white/10 bg-neutral-900 transition duration-300 hover:-translate-y-1 hover:border-white/25 sm:min-h-[195px] ${
                index % 6 === 0 ? "sm:col-span-2" : ""
              }`}
            >
              <img
                src={space.image}
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-70 transition duration-500 group-hover:scale-105 group-hover:opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10" />
              <div className="relative flex h-full min-h-[175px] items-end p-4 sm:min-h-[195px]">
                <h3 className="text-base font-medium leading-tight text-white">
                  {space.name}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
