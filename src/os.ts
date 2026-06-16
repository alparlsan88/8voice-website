import type { ComponentType } from "react";
import { WindowsIcon, AppleIcon, LinuxIcon } from "./components/icons";

export type OS = "windows" | "macos" | "linux" | "unknown";

export interface OSDetected {
  os: OS;
  label: string;          // "for Windows", "for macOS", "for Linux"
  fileName: string;       // expected installer filename in releases
  Icon: ComponentType<{ className?: string }>;
}

function detect(): OS {
  const ua = navigator.userAgent;
  if (ua.includes("Win")) return "windows";
  if (ua.includes("Mac")) return "macos";
  if (ua.includes("Linux")) return "linux";
  return "unknown";
}

const MAP: Record<OS, Omit<OSDetected, "os">> = {
  windows: {
    label: "for Windows",
    fileName: ".exe",
    Icon: WindowsIcon,
  },
  macos: {
    label: "for macOS",
    fileName: ".dmg",
    Icon: AppleIcon,
  },
  linux: {
    label: "for Linux",
    fileName: ".AppImage",
    Icon: LinuxIcon,
  },
  unknown: {
    label: "",
    fileName: "",
    Icon: WindowsIcon,
  },
};

export function getOS(): OSDetected {
  const os = detect();
  return { os, ...MAP[os] };
}
