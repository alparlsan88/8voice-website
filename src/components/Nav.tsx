import { BRAND, APP_REPO_URL, CONTRIBUTE_URL, RELEASES_URL } from "../brand";
import { LogoMark } from "./LogoMark";
import { GitHubIcon, StarIcon, DownloadIcon } from "./icons";

const LINKS = [
  { href: "#features", label: "Features" },
  { href: "#how", label: "How it works" },
  { href: "#privacy", label: "Privacy" },
  { href: "#stack", label: "Stack" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-neutral-950/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-3">
          <LogoMark className="h-9 w-9" />
          <span className="text-lg font-bold tracking-tight text-neutral-100">
            {BRAND.name}
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-neutral-400 transition hover:text-neutral-100"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={RELEASES_URL}
            className="flex items-center gap-1.5 rounded-xl bg-emerald-600 px-3 py-2 text-sm font-semibold text-white transition hover:bg-emerald-500"
          >
            <DownloadIcon className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Download</span>
          </a>
          <a
            href={APP_REPO_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center gap-1.5 rounded-xl bg-amber-500/10 px-3 py-2 text-sm font-semibold text-amber-400 ring-1 ring-amber-500/20 transition hover:bg-amber-500/20"
          >
            <StarIcon className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Star</span>
          </a>
          <a
            href={CONTRIBUTE_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center gap-1.5 rounded-xl bg-neutral-800 px-3 py-2 text-sm font-semibold text-neutral-100 ring-1 ring-white/5 transition hover:bg-neutral-700"
          >
            <GitHubIcon className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
