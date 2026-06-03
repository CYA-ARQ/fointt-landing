import { Workflow } from "lucide-react";
import { steps } from "../content";

export default function HowItWorks() {
  return (
    <section className="bg-black">
      <div className="section-shell">
        <div className="max-w-3xl">
          <span className="eyebrow">
            <Workflow className="h-4 w-4" aria-hidden="true" />
            cómo funciona
          </span>
          <h2 className="text-4xl font-medium leading-tight tracking-normal text-white sm:text-5xl md:text-6xl">
            de tu idea a una reserva en tres pasos
          </h2>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <article
                key={step.title}
                className="glass-card relative overflow-hidden rounded-3xl p-7"
              >
                <span className="absolute right-5 top-4 text-6xl font-medium text-white/[0.06]">
                  0{index + 1}
                </span>
                <div className="relative z-10">
                  <div className="mb-12 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-black">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="text-2xl font-medium leading-tight text-white">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-white/60">{step.text}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
