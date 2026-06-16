import { FloatingWidgetDemo } from "./FloatingWidgetDemo";
import { PinIcon } from "./icons";

export function WidgetShowcase() {
  return (
    <section
      id="widget"
      className="relative overflow-hidden border-y border-white/5 bg-neutral-900/40"
    >
      {/* Ambient glow behind the widget */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-4 py-20 text-center sm:px-6 lg:py-24">
        <span className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-3 py-1 text-xs font-medium text-emerald-400 ring-1 ring-emerald-500/20">
          <PinIcon className="h-3.5 w-3.5" />
          Always on screen
        </span>

        <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-bold tracking-tight text-neutral-100 sm:text-4xl">
          The floating widget is the fastest way to dictate
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-base text-neutral-400">
          Keep the pill-sized control within reach. One click starts recording,
          the live wave shows it's listening, and your words are typed wherever
          your cursor is.
        </p>

        <div className="mt-12">
          <FloatingWidgetDemo />
        </div>

        <div className="mx-auto mt-12 grid max-w-3xl gap-4 text-sm text-neutral-400 sm:grid-cols-3">
          <div className="rounded-2xl bg-neutral-900/60 p-4 ring-1 ring-white/5">
            <strong className="block text-neutral-100">Click to record</strong>
            Starts instantly, no window switching.
          </div>
          <div className="rounded-2xl bg-neutral-900/60 p-4 ring-1 ring-white/5">
            <strong className="block text-neutral-100">Live wave</strong>
            Visual feedback while you speak.
          </div>
          <div className="rounded-2xl bg-neutral-900/60 p-4 ring-1 ring-white/5">
            <strong className="block text-neutral-100">Draggable</strong>
            Position it anywhere on your desktop.
          </div>
        </div>
      </div>
    </section>
  );
}
