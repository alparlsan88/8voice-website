import { ShieldIcon, CheckIcon } from "./icons";

const POINTS = [
  "Audio never leaves your device in offline mode",
  "Run your own Whisper GGUF model locally",
  "MIT-licensed source you can read and audit",
  "Cloud mode is opt-in, with your own Groq key",
];

export function Privacy() {
  return (
    <section id="privacy" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-24">
      <div className="overflow-hidden rounded-3xl bg-neutral-900 p-8 ring-1 ring-emerald-500/15 sm:p-12">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/20">
              <ShieldIcon className="h-6 w-6" />
            </div>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-neutral-100 sm:text-4xl">
              Your voice never leaves your device
            </h2>
            <p className="mt-4 text-base leading-relaxed text-neutral-400">
              8voice is built privacy-first. Transcribe entirely on-device with
              Whisper, or bring your own key for cloud — you stay in control of
              where your audio goes.
            </p>
          </div>

          <ul className="grid gap-3">
            {POINTS.map((p) => (
              <li
                key={p}
                className="flex items-center gap-3 rounded-xl bg-neutral-950/60 p-4 ring-1 ring-white/5"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">
                  <CheckIcon className="h-3.5 w-3.5" />
                </span>
                <span className="text-sm text-neutral-200">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
