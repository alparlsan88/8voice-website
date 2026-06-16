import {
  CommandIcon,
  ShieldIcon,
  CloudIcon,
  StopIcon,
  TypeIcon,
  PinIcon,
} from "./icons";
import type { ComponentType } from "react";

type Feature = {
  icon: ComponentType<{ className?: string }>;
  title: string;
  body: string;
};

const FEATURES: Feature[] = [
  {
    icon: CommandIcon,
    title: "Global shortcut",
    body: "Push-to-talk or toggle mode. One key combo triggers recording from anywhere on your desktop.",
  },
  {
    icon: ShieldIcon,
    title: "Offline transcription",
    body: "Local Whisper GGUF models run on-device via whisper.cpp. No internet, no servers, no leaks.",
  },
  {
    icon: CloudIcon,
    title: "Cloud transcription",
    body: "Prefer speed? Bring your own Groq API key and use the Groq Whisper API in seconds.",
  },
  {
    icon: StopIcon,
    title: "VAD auto-stop",
    body: "Voice Activity Detection stops recording automatically once you pause, so dictation stays hands-free.",
  },
  {
    icon: TypeIcon,
    title: "Text injection",
    body: "Transcripts are typed or pasted straight into the focused window — email, editor, chat, anywhere.",
  },
  {
    icon: PinIcon,
    title: "Tray + floating widget",
    body: "Lives quietly in the system tray with a minimal floating widget for quick control on screen.",
  },
];

export function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-neutral-100 sm:text-4xl">
          Everything you need to dictate
        </h2>
        <p className="mt-4 text-base text-neutral-400">
          A complete, privacy-respecting voice-to-text pipeline — built for the desktop.
        </p>
      </div>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((f) => (
          <div
            key={f.title}
            className="rounded-2xl bg-neutral-900 p-6 shadow-lg ring-1 ring-white/5 transition hover:ring-white/10"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-neutral-800/80 text-emerald-400 ring-1 ring-emerald-500/20">
              <f.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-base font-semibold text-neutral-100">
              {f.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-neutral-400">
              {f.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
