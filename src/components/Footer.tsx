import { BRAND, APP_REPO_URL, README_URL, CHANGELOG_URL, LICENSE_URL } from "../brand";
import { LogoMark } from "./LogoMark";
import { GitHubIcon } from "./icons";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-neutral-950">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center gap-3 md:justify-start">
              <LogoMark className="h-10 w-10" />
              <span className="text-lg font-bold tracking-tight text-neutral-100">
                {BRAND.name}
              </span>
            </div>
            <p className="mt-3 max-w-xs text-sm text-neutral-400">
              Privacy-first voice dictation for the desktop. Open source under MIT.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-col gap-3 text-center md:text-left">
            <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
              Project
            </span>
            <a href={README_URL} target="_blank" rel="noreferrer noopener" className="text-sm text-neutral-400 transition hover:text-neutral-100">
              README
            </a>
            <a href={CHANGELOG_URL} target="_blank" rel="noreferrer noopener" className="text-sm text-neutral-400 transition hover:text-neutral-100">
              Changelog
            </a>
            <a href={LICENSE_URL} target="_blank" rel="noreferrer noopener" className="text-sm text-neutral-400 transition hover:text-neutral-100">
              License (MIT)
            </a>
          </nav>

          <a
            href={APP_REPO_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center gap-2 rounded-xl bg-neutral-800 px-4 py-2.5 text-sm font-semibold text-neutral-100 ring-1 ring-white/5 transition hover:bg-neutral-700"
          >
            <GitHubIcon className="h-4 w-4" />
            Star on GitHub
          </a>
        </div>

        <div className="mt-10 border-t border-white/5 pt-6 text-center">
          <p className="text-xs text-neutral-600">
            © 2026 {BRAND.name} · MIT License
          </p>
          <p className="mt-2 text-xs text-neutral-700">
            Not affiliated with, endorsed by, or sponsored by OpenAI, Whisper, or Groq.
          </p>
        </div>
      </div>
    </footer>
  );
}
