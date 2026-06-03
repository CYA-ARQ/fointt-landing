import { assetPath } from "../assetPath";
import Navbar from "./Navbar";

function HeroStat({
  number,
  label,
  align = "right",
  rotate = "rotate-[20deg]",
}: {
  number: string;
  label: string;
  align?: "left" | "right";
  rotate?: string;
}) {
  const isRight = align === "right";

  return (
    <div>
      <div
        className={`flex items-center gap-3 ${isRight ? "justify-end" : "justify-start"}`}
      >
        {isRight ? (
          <span
            className={`hidden h-px w-24 origin-center bg-white/40 md:block ${rotate}`}
          />
        ) : null}
        <span className="text-3xl font-medium tracking-normal sm:text-4xl md:text-5xl">
          {number}
        </span>
        {!isRight ? (
          <span
            className={`hidden h-px w-24 origin-center bg-white/40 md:block ${rotate}`}
          />
        ) : null}
      </div>
      <p
        className={`mt-1 text-xs text-white/70 md:text-sm ${isRight ? "text-right" : "text-left"}`}
      >
        {label}
      </p>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative h-screen min-h-[720px] w-full overflow-hidden bg-black"
    >
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        poster={assetPath("assets/fointt-hero-image.png")}
        src={assetPath("assets/fointt-hero-video.mp4")}
      />
      <div className="absolute inset-0 bg-black/45" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-black/60 to-transparent" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent to-black" />

      <Navbar />

      <div className="relative h-full w-full">
        <h1 className="hero-title absolute left-4 top-[18%] max-w-[92vw] text-[4rem] font-medium text-white sm:left-6 sm:text-[5.6rem] md:left-10 md:text-[8rem] lg:text-[10rem] xl:text-[12rem]">
          encuentra
        </h1>
        <h1 className="hero-title absolute right-5 top-[37%] text-[4.4rem] font-medium text-white sm:right-8 sm:text-[6.2rem] md:right-10 md:text-[8.5rem] lg:text-[10.5rem] xl:text-[12rem]">
          tu
        </h1>
        <h1 className="hero-title absolute left-[12%] top-[58%] text-[4.2rem] font-medium text-white sm:left-[18%] sm:text-[6rem] md:left-[28%] md:text-[8.5rem] lg:text-[10.5rem] xl:text-[12rem]">
          point
        </h1>

        <p className="absolute left-5 top-[48%] max-w-[280px] text-[15px] leading-snug text-white/90 sm:left-6 md:left-10">
          descubre espacios, locales y experiencias cerca de ti. fointt te busca
          el mejor point para cada plan.
        </p>

        <div className="absolute right-5 top-[14%] sm:right-6 md:right-24">
          <HeroStat number="+100" label="points por descubrir" />
        </div>

        <div className="absolute bottom-24 left-5 sm:left-6 md:bottom-24 md:left-20">
          <HeroStat
            number="+10"
            label="categorías de espacios"
            align="left"
            rotate="rotate-[-20deg]"
          />
        </div>

        <div className="absolute bottom-14 right-5 sm:right-6 md:bottom-20 md:right-20">
          <HeroStat
            number="24/7"
            label="buscando el mejor point"
            rotate="rotate-[-20deg]"
          />
        </div>
      </div>
    </section>
  );
}
