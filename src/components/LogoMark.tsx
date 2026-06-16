// The 8voice logo mark: white rounded square with a solid dark dot.
// Uses the canonical SVG asset so the brand is pixel-identical across the
// landing page, the app, the widget, and the desktop installer icons.

export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <img
      src="/logo.svg"
      alt="8voice"
      className={`shrink-0 ${className}`}
    />
  );
}
