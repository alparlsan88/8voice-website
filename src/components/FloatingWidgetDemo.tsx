import { useEffect, useRef, useState } from "react";

type DemoState = "idle" | "recording" | "processing";

/** Interactive replica of the 8voice floating widget.
 *
 * Mirrors the real Tauri widget (src/widget/Widget.tsx): a rounded pill
 * with the logo button on the left and a status area on the right.
 * Clicking the logo cycles through idle → recording → processing → idle
 * so visitors can see the widget's motion language before installing.
 */
export function FloatingWidgetDemo() {
  const [state, setState] = useState<DemoState>("idle");
  const [amplitude, setAmplitude] = useState(0);
  const timeoutRef = useRef<number | null>(null);

  // Simulate live audio amplitude while recording.
  useEffect(() => {
    if (state !== "recording") {
      setAmplitude(0);
      return;
    }
    let raf = 0;
    const tick = () => {
      setAmplitude(0.35 + Math.random() * 0.55);
      raf = window.setTimeout(tick, 90);
    };
    tick();
    return () => window.clearTimeout(raf);
  }, [state]);

  // Auto-advance the demo: recording lasts ~2.5s, processing ~1.8s.
  useEffect(() => {
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    if (state === "recording") {
      timeoutRef.current = window.setTimeout(() => setState("processing"), 2500);
    } else if (state === "processing") {
      timeoutRef.current = window.setTimeout(() => setState("idle"), 1800);
    }
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, [state]);

  const handleClick = () => {
    if (state === "idle") setState("recording");
    // During recording/processing the timer drives the next state.
  };

  return (
    <div className="flex flex-col items-center gap-6">
      {/* The widget pill */}
      <button
        onClick={handleClick}
        aria-label={
          state === "recording"
            ? "Recording — click to finish"
            : state === "processing"
              ? "Processing transcript"
              : "Start recording demo"
        }
        className="group flex items-center gap-2.5 rounded-full bg-neutral-800/95 px-2 py-1.5 shadow-[0_4px_24px_rgba(0,0,0,0.5),0_0_20px_-4px_rgba(255,255,255,0.15)] ring-1 ring-white/25 transition hover:ring-white/35 active:scale-95"
      >
        {/* Logo button */}
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm transition group-hover:scale-105">
          <span className="block h-2.5 w-2.5 rounded-full bg-neutral-900" />
        </span>

        {/* Status area */}
        <span className="flex h-7 min-w-[5.5rem] items-center justify-center px-2">
          {state === "processing" ? (
            <Spinner />
          ) : state === "recording" ? (
            <WaveIndicator amplitude={amplitude} />
          ) : (
            <span className="whitespace-nowrap text-xs font-semibold tracking-tight text-white">
              8voice
            </span>
          )}
        </span>
      </button>

      {/* Helper caption */}
      <p className="text-sm text-neutral-500">
        {state === "recording"
          ? "Listening…"
          : state === "processing"
            ? "Transcribing and typing…"
            : "Click the widget to try the demo"}
      </p>
    </div>
  );
}

function Spinner() {
  return (
    <svg
      className="h-4 w-4 animate-spin text-neutral-300"
      viewBox="0 0 24 24"
      fill="none"
    >
      <circle
        className="opacity-20"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="3"
      />
      <path
        className="opacity-90"
        fill="currentColor"
        d="M12 2a10 10 0 0 1 10 10h-3a7 7 0 0 0-7-7V2z"
      />
    </svg>
  );
}

/** Animated wave bars driven by a simulated amplitude value. */
function WaveIndicator({ amplitude }: { amplitude: number }) {
  const [time, setTime] = useState(0);

  useEffect(() => {
    let raf = 0;
    const tick = () => {
      setTime((t) => t + 1);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const barCount = 15;
  const bars = Array.from({ length: barCount }, (_, i) => i);
  const center = (barCount - 1) / 2;
  const phases = bars.map((i) => Math.abs(i - center) * 0.25);
  const factors = bars.map((i) => 1.0 - (Math.abs(i - center) / center) * 0.2);

  return (
    <span className="flex h-6 w-full items-center justify-center gap-[1px] overflow-hidden px-0.5">
      {bars.map((i) => {
        const pulse = 0.5 + 0.5 * Math.sin(time * 0.18 + phases[i]);
        const scale = 1 + amplitude * pulse * factors[i] * 5.5;
        return (
          <span
            key={i}
            className="flex-1 origin-center rounded-full bg-white"
            style={{ height: "4px", transform: `scaleY(${scale})` }}
          />
        );
      })}
    </span>
  );
}
