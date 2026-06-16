import { CpuIcon, ZapIcon, CheckIcon } from "./icons";

const LOCAL = {
  badge: "Recommended for privacy",
  icon: CpuIcon,
  title: "Local model",
  subtitle: "Offline · on-device",
  points: [
    "whisper.cpp via whisper-rs",
    "GGUF models (tiny → medium)",
    "No internet connection required",
    "Maximum privacy — audio stays local",
  ],
};

const CLOUD = {
  badge: "Fastest results",
  icon: ZapIcon,
  title: "Groq Whisper API",
  subtitle: "Cloud · bring your key",
  points: [
    "Groq-hosted Whisper large models",
    "Low-latency cloud transcription",
    "Your own API key, your own account",
    "Great for less-powerful machines",
  ],
};

function ProviderCard({ data }: { data: typeof LOCAL }) {
  return (
    <div className="rounded-2xl bg-neutral-900 p-6 ring-1 ring-white/5">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-800/80 text-emerald-400 ring-1 ring-emerald-500/20">
          <data.icon className="h-5 w-5" />
        </div>
        <div>
          <p className="text-base font-semibold text-neutral-100">{data.title}</p>
          <p className="text-xs text-neutral-500">{data.subtitle}</p>
        </div>
      </div>

      <span className="mt-5 inline-block rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400 ring-1 ring-emerald-500/20">
        {data.badge}
      </span>

      <ul className="mt-5 grid gap-2.5">
        {data.points.map((p) => (
          <li key={p} className="flex items-center gap-2.5">
            <CheckIcon className="h-4 w-4 shrink-0 text-emerald-500" />
            <span className="text-sm text-neutral-300">{p}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Providers() {
  return (
    <section className="border-y border-white/5 bg-neutral-900/40">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-100 sm:text-4xl">
            Local or cloud — your choice
          </h2>
          <p className="mt-4 text-base text-neutral-400">
            Two transcription providers, switchable any time from settings.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-3xl gap-5 md:grid-cols-2">
          <ProviderCard data={LOCAL} />
          <ProviderCard data={CLOUD} />
        </div>
      </div>
    </section>
  );
}
