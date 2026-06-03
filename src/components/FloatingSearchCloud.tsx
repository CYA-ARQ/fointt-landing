import { FormEvent, useState } from "react";
import { Search } from "lucide-react";

export default function FloatingSearchCloud() {
  const [query, setQuery] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    document.getElementById("explorar")?.scrollIntoView({ behavior: "smooth" });
    window.history.replaceState(null, "", "#explorar");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="fixed bottom-4 left-1/2 z-40 flex w-[calc(100%-2rem)] max-w-[560px] -translate-x-1/2 items-center gap-2 rounded-full border border-white/12 bg-black/72 p-2 shadow-soft backdrop-blur-2xl"
      aria-label="buscar espacios en fointt"
    >
      <span className="absolute -top-2 left-10 h-6 w-12 rounded-full border border-white/10 bg-black/72 backdrop-blur-2xl" />
      <span className="absolute -top-3 left-24 h-8 w-16 rounded-full border border-white/10 bg-black/72 backdrop-blur-2xl" />
      <div className="relative z-10 flex min-w-0 flex-1 items-center gap-2 rounded-full bg-white/[0.06] px-4 py-3">
        <Search className="h-4 w-4 shrink-0 text-white/60" aria-hidden="true" />
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          className="min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-white/42"
          placeholder="busca tu point"
          aria-label="busca tu point"
        />
      </div>
      <button
        type="submit"
        className="relative z-10 rounded-full bg-white px-5 py-3 text-sm font-normal text-black transition hover:bg-neutral-200"
      >
        buscar
      </button>
    </form>
  );
}
