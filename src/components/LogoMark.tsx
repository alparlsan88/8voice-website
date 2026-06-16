// The 8voice logo mark: a white rounded square with a solid dark dot.
// Mirrors the in-app header markup (App.tsx / Onboarding.tsx) so the brand
// reads consistently across the app and the landing page.

export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-2xl bg-white shadow-lg ring-1 ring-white/20 ${className}`}
    >
      <span className="block rounded-full bg-neutral-900" style={{ width: "38%", height: "38%" }} />
    </div>
  );
}
