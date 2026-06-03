import { FormEvent, useState } from "react";
import { Check, ImagePlus, Send } from "lucide-react";
import { formSpaceTypes, PHONE_DISPLAY } from "../content";
import ContactButtons from "./ContactButtons";

export default function HostForm() {
  const [selected, setSelected] = useState<string[]>([]);
  const [sent, setSent] = useState(false);

  const toggleType = (type: string) => {
    setSelected((current) => {
      if (current.includes(type)) {
        return current.filter((item) => item !== type);
      }

      if (current.length >= 3) {
        return current;
      }

      return [...current, type];
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <section id="registro" className="bg-black">
      <div className="section-shell">
        <div className="mb-10 grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <span className="eyebrow">
              <ImagePlus className="h-4 w-4" aria-hidden="true" />
              registro de evento
            </span>
            <h2 className="text-4xl font-medium leading-tight tracking-normal text-white sm:text-5xl md:text-6xl">
              registra tu evento
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-7 text-white/68 md:text-lg">
              déjanos lo básico de tu plan y te contactamos para ayudarte a
              encontrar el point correcto. también puedes escribirnos directo al
              {` ${PHONE_DISPLAY}`}.
            </p>
          </div>
          <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-5 backdrop-blur">
            <p className="mb-4 text-sm text-white/62">
              si ya quieres reservar, usa una de estas dos opciones.
            </p>
            <ContactButtons />
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="glass-card rounded-[2rem] p-5 sm:p-6 md:p-10"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <label className="grid gap-2">
              <span className="text-sm text-white/70">nombre completo</span>
              <input
                className="field rounded-full"
                type="text"
                name="nombre"
                placeholder="tu nombre"
                required
              />
            </label>

            <label className="grid gap-2">
              <span className="text-sm text-white/70">nombre del evento</span>
              <input
                className="field rounded-full"
                type="text"
                name="evento"
                placeholder="cumpleaños, previa, reunión..."
                required
              />
            </label>

            <div className="md:col-span-2">
              <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
                <span className="text-sm text-white/70">
                  tipo de point, elige hasta 3 opciones
                </span>
                <span className="text-xs text-white/45">{selected.length}/3</span>
              </div>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
                {formSpaceTypes.map((type) => {
                  const active = selected.includes(type);
                  return (
                    <button
                      key={type}
                      type="button"
                      aria-pressed={active}
                      onClick={() => toggleType(type)}
                      className={`flex min-h-11 items-center justify-between gap-2 rounded-full border px-4 py-2 text-left text-sm transition ${
                        active
                          ? "border-white bg-white text-black"
                          : "border-white/10 bg-black/35 text-white/70 hover:border-white/30 hover:text-white"
                      }`}
                    >
                      <span>{type}</span>
                      {active ? (
                        <Check className="h-4 w-4 shrink-0" aria-hidden="true" />
                      ) : null}
                    </button>
                  );
                })}
              </div>
              <input type="hidden" name="tipos" value={selected.join(", ")} />
            </div>

            <label className="grid gap-2">
              <span className="text-sm text-white/70">zona o ciudad</span>
              <input
                className="field rounded-full"
                type="text"
                name="ubicacion"
                placeholder="dónde quieres hacer el plan"
                required
              />
            </label>

            <label className="grid gap-2">
              <span className="text-sm text-white/70">fecha tentativa</span>
              <input
                className="field rounded-full"
                type="text"
                name="fecha"
                placeholder="día, mes o rango"
                required
              />
            </label>

            <label className="grid gap-2">
              <span className="text-sm text-white/70">cantidad de personas</span>
              <input
                className="field rounded-full"
                type="text"
                name="personas"
                placeholder="ej. 25 personas"
                required
              />
            </label>

            <label className="grid gap-2">
              <span className="text-sm text-white/70">presupuesto referencial</span>
              <input
                className="field rounded-full"
                type="text"
                name="presupuesto"
                placeholder="ej. s/80 por hora"
              />
            </label>

            <label className="grid gap-2 md:col-span-2">
              <span className="text-sm text-white/70">detalles del plan</span>
              <textarea
                className="field min-h-32 resize-y rounded-2xl"
                name="descripcion"
                placeholder="cuéntanos qué tipo de ambiente buscas"
                required
              />
            </label>

            <label className="grid gap-2">
              <span className="text-sm text-white/70">número de whatsapp</span>
              <input
                className="field rounded-full"
                type="tel"
                name="whatsapp"
                placeholder="+51 999 999 999"
                required
              />
            </label>

            <label className="grid gap-2">
              <span className="text-sm text-white/70">referencias, opcional</span>
              <input
                className="field rounded-full file:mr-4 file:rounded-full file:border-0 file:bg-white file:px-4 file:py-2 file:text-sm file:text-black"
                type="file"
                name="media"
                accept="image/*,video/*"
                multiple
              />
            </label>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xl text-sm leading-6 text-white/50">
              mientras más completo sea tu plan, más rápido podremos ayudarte.
            </p>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-normal text-black transition hover:bg-neutral-200"
            >
              enviar mi evento
              <Send className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>

          {sent ? (
            <div className="mt-5 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white/78">
              evento recibido. te contactaremos por WhatsApp o llamada para
              coordinar el siguiente paso.
            </div>
          ) : null}
        </form>
      </div>
    </section>
  );
}
