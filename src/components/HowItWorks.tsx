import { BRAND } from "../brand";

const STEPS = [
  {
    n: "01",
    title: "Press your shortcut",
    body: `Hold ${BRAND.hotkey} for push-to-talk, or tap it once for toggle mode. Recording starts instantly.`,
  },
  {
    n: "02",
    title: "Speak naturally",
    body: "Talk as long as you like. Voice Activity Detection stops the recording the moment you pause.",
  },
  {
    n: "03",
    title: "It types for you",
    body: "Your speech is transcribed and injected into whatever window is focused — no copy-pasting.",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="border-y border-white/5 bg-neutral-900/40">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-100 sm:text-4xl">
            Three steps to text
          </h2>
          <p className="mt-4 text-base text-neutral-400">
            No app-switching. No manual transcription. Just talk.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <div key={s.n} className="relative rounded-2xl bg-neutral-900 p-6 ring-1 ring-white/5">
              <span className="text-sm font-bold text-emerald-500">{s.n}</span>
              <h3 className="mt-3 text-lg font-semibold text-neutral-100">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                {s.body}
              </p>
              {i < STEPS.length - 1 && (
                <span
                  aria-hidden
                  className="absolute right-6 top-1/2 hidden text-neutral-700 md:block"
                >
                  →
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
