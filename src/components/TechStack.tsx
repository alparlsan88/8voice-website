const STACK = [
  "Tauri 2.0",
  "React + TypeScript",
  "Tailwind CSS v4",
  "Rust",
  "whisper.cpp",
  "Groq",
];

export function TechStack() {
  return (
    <section id="stack" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-neutral-100 sm:text-4xl">
          Built on a modern stack
        </h2>
        <p className="mt-4 text-base text-neutral-400">
          Native performance from Rust, a snappy web UI, and the Whisper ecosystem.
        </p>
      </div>

      <div className="mx-auto mt-12 flex max-w-3xl flex-wrap justify-center gap-3">
        {STACK.map((s) => (
          <span
            key={s}
            className="rounded-full bg-neutral-900 px-4 py-2 text-sm font-medium text-neutral-300 ring-1 ring-white/5 transition hover:text-neutral-100 hover:ring-white/10"
          >
            {s}
          </span>
        ))}
      </div>
    </section>
  );
}
