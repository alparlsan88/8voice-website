import { BRAND, APP_REPO_URL, README_URL, RELEASES_URL, CONTRIBUTE_URL, STAR_URL } from "../brand";
import { WaveIndicator } from "./WaveIndicator";
import { GitHubIcon, DownloadIcon, StarIcon, CodeForkIcon, TerminalIcon, ArrowRightIcon } from "./icons";
import { getOS } from "../os";

export function Hero() {
  const detected = getOS();

  return (
    <section id="top" className="relative overflow-hidden">
      {/* Ambient emerald glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[-10rem] h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:py-28">
        {/* Copy */}
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-3 py-1 text-xs font-medium text-emerald-400 ring-1 ring-emerald-500/20">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Open source · MIT
          </span>

          <h1 className="mt-5 text-4xl font-bold tracking-tight text-neutral-100 sm:text-5xl lg:text-6xl">
            {BRAND.tagline}
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-neutral-400 lg:mx-0 lg:text-lg">
            {BRAND.description}
          </p>

          {/* Primary CTAs — Download + Star + Contribute */}
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
            {/* Download — platform detected */}
            <a
              href={RELEASES_URL}
              className="flex w-full items-center justify-center gap-2.5 rounded-xl bg-emerald-600 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-500/15 transition hover:bg-emerald-500 sm:w-auto"
            >
              <detected.Icon className="h-4.5 w-4.5" />
              <DownloadIcon className="h-4 w-4" />
              Download {detected.label}
            </a>

            {/* Star on GitHub */}
            <a
              href={STAR_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-amber-500/10 px-4 py-3 text-sm font-semibold text-amber-400 ring-1 ring-amber-500/20 transition hover:bg-amber-500/20 sm:w-auto"
            >
              <StarIcon className="h-4 w-4" />
              Star on GitHub
            </a>

            {/* Contribute */}
            <a
              href={CONTRIBUTE_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-neutral-800 px-4 py-3 text-sm font-semibold text-neutral-100 ring-1 ring-white/5 transition hover:bg-neutral-700 sm:w-auto"
            >
              <CodeForkIcon className="h-4 w-4" />
              Contribute
            </a>
          </div>

          {/* Secondary: source build */}
          <p className="mt-4 text-center text-xs text-neutral-500 lg:text-left">
            Prefer building from source?{" "}
            <a
              href={README_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1 font-medium text-neutral-400 underline decoration-neutral-600 underline-offset-2 transition hover:text-neutral-200 hover:decoration-neutral-400"
            >
              Read the guide <ArrowRightIcon className="h-3 w-3" />
            </a>
          </p>
        </div>

        {/* App status card mockup — mirrors the recording state from App.tsx */}
        <div className="mx-auto w-full max-w-md lg:mx-0">
          <div className="rounded-2xl bg-neutral-900 p-5 shadow-2xl shadow-emerald-500/5 ring-1 ring-white/5">
            {/* Header row mimicking the in-app card */}
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-800/80 ring-1 ring-red-500/20">
                <WaveIndicator color="bg-red-500" animate />
              </div>
              <div className="flex-1">
                <p className="text-base font-semibold text-neutral-100">Recording</p>
                <p className="truncate text-sm text-neutral-400">
                  Listening to your speech…
                </p>
              </div>
              <span className="rounded-lg bg-neutral-800 px-2 py-1 text-xs font-medium text-neutral-400 ring-1 ring-white/5">
                PTT
              </span>
            </div>

            {/* Live "transcript" */}
            <div className="rounded-xl border border-neutral-800/60 bg-neutral-950/60 p-4 backdrop-blur-sm">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Last transcript
              </p>
              <p className="whitespace-pre-wrap break-words text-sm leading-relaxed text-neutral-200">
                The quick brown fox jumps over the lazy dog and types it into any window.
              </p>
            </div>

            <div className="mt-4 flex items-center justify-between text-xs text-neutral-500">
              <span className="font-mono">{BRAND.hotkey}</span>
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Local model · offline
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
