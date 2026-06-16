// Inline stroke icons (Feather-style) matching the app's UI iconography.
// strokeWidth=2, currentColor — same idiom as src/App.tsx.

type IconProps = { className?: string };

export function MicIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <line x1="12" y1="19" x2="12" y2="23" />
      <line x1="8" y1="23" x2="16" y2="23" />
    </svg>
  );
}

export function ShieldIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

export function CloudIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.5 19c0-1.7-1.3-3-3-3h-11a3 3 0 0 1-3-3c0-1.6 1.2-2.9 2.8-3a5 5 0 0 1 9.4-1.6 3 3 0 0 1 4.3 2.6 3.5 3.5 0 0 1 .5 6.9V19z" />
    </svg>
  );
}

export function StopIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="5" width="14" height="14" rx="2" />
    </svg>
  );
}

export function TypeIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="4 7 4 4 20 4 20 7" />
      <line x1="9" y1="20" x2="15" y2="20" />
      <line x1="12" y1="4" x2="12" y2="20" />
    </svg>
  );
}

export function PinIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 17v5" />
      <path d="M9 10.76V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v5.76a2 2 0 0 0 .5 1.32L18 15H6l2.5-2.92a2 2 0 0 0 .5-1.32z" />
    </svg>
  );
}

export function CommandIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
    </svg>
  );
}

export function GitHubIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14 0 1.55-.01 2.8-.01 3.18 0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
    </svg>
  );
}

export function ArrowRightIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

export function CheckIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export function TerminalIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="4 17 10 11 4 5" />
      <line x1="12" y1="19" x2="20" y2="19" />
    </svg>
  );
}

export function CpuIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
      <line x1="9" y1="1" x2="9" y2="4" />
      <line x1="15" y1="1" x2="15" y2="4" />
      <line x1="9" y1="20" x2="9" y2="23" />
      <line x1="15" y1="20" x2="15" y2="23" />
      <line x1="20" y1="9" x2="23" y2="9" />
      <line x1="20" y1="14" x2="23" y2="14" />
      <line x1="1" y1="9" x2="4" y2="9" />
      <line x1="1" y1="14" x2="4" y2="14" />
    </svg>
  );
}

export function ZapIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

export function GlobeIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

export function WindowsIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 12V6.75l8-1.25V12H3zm0 .5h8v6.5l-8-1.25V12.5zM11.5 5.38l9.5-1.63v8.25h-9.5V5.38zm0 7.12h9.5v8.25l-9.5-1.63V12.5z" />
    </svg>
  );
}

export function AppleIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

export function LinuxIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.503 0c-.155 0-.311.015-.466.046C9.955.584 8.682 2.476 8.903 4.558c.037.352.117.687.233.993-.374.21-.745.43-1.066.694C6.407 7.576 5.33 9.643 5.08 11.967c-.313 2.91.624 5.527 1.87 6.983.048.056.09.113.129.17.07.11.127.224.174.343.254.636.09 1.41-.544 2.27-.858 1.14-1.087 2.59-1.087 2.59s.233-.012.545-.04c-.367 1.277-.328 2.464.028 3.094.22.395.552.653.942.653h.026c.82-.03 1.49-.97 1.73-2.2.043-.22.072-.44.087-.67.226.03.468.047.725.047.26 0 .504-.017.73-.047.016.23.044.45.088.67.24 1.23.91 2.17 1.73 2.2h.026c.39 0 .722-.258.942-.653.356-.63.395-1.817.028-3.094.312.028.545.04.545.04s-.23-1.45-1.088-2.59c-.633-.86-.798-1.634-.544-2.27.047-.12.104-.233.174-.344.04-.057.08-.114.13-.17 1.245-1.456 2.182-4.073 1.868-6.983-.25-2.324-1.327-4.39-2.99-5.722-.32-.264-.69-.484-1.065-.694.116-.306.196-.64.233-.993.22-2.082-1.052-3.974-3.134-4.512A3.594 3.594 0 0012.503 0zm-.225 4.14c.085 0 .17.008.253.024 1.047.21 1.697 1.342 1.452 2.527-.028.13-.068.256-.118.377l-.067.158c-.17-.042-.345-.076-.522-.102l-.095.57c-.177-.027-.355-.043-.535-.043s-.358.016-.535.043l-.095-.57c-.177.026-.352.06-.522.102l-.067-.158c-.05-.12-.09-.247-.118-.377-.245-1.185.405-2.316 1.452-2.527.135-.028.27-.033.405-.016l-.508-.008zm-3.257 4.064c.386 0 .75.08 1.06.224.155.072.297.163.423.27.196.167.355.37.47.598.1.197.17.41.207.63.066.39.04.79-.073 1.167-.2.683-.636 1.27-1.22 1.647-.33.213-.703.355-1.086.39-.203.018-.41.01-.61-.024-.31-.054-.6-.17-.857-.34-.63-.408-1.08-1.038-1.276-1.747-.1-.36-.12-.738-.05-1.104.067-.356.21-.692.412-.983.13-.19.285-.36.46-.507.38-.323.86-.507 1.37-.507l.24.186zm6.45.056c.44 0 .86.155 1.19.43.25.21.45.475.59.77.14.29.22.61.24.94.02.34-.04.67-.16.99-.19.49-.5.923-.89 1.254-.29.25-.63.434-.99.54-.26.076-.54.1-.81.07-.52-.057-1.01-.28-1.39-.637-.31-.29-.54-.656-.67-1.06-.1-.294-.13-.605-.1-.915.05-.41.2-.796.44-1.126.15-.21.33-.393.54-.54.36-.25.79-.39 1.24-.4l.12-.026zM12.5 17.5c1.09 0 2.1.1 2.94.274.46.09.87.2 1.2.334.16.066.3.14.4.22.05.036.09.076.12.12.03.04.05.09.05.142 0 .1-.06.19-.15.27-.18.14-.5.27-.9.38-.87.24-2.1.38-3.47.38h-.16c-1.37 0-2.6-.14-3.47-.38-.4-.11-.72-.24-.9-.38-.09-.08-.15-.17-.15-.27 0-.052.02-.102.05-.142.03-.044.07-.084.12-.12.1-.08.24-.154.4-.22.33-.134.74-.244 1.2-.334.84-.174 1.85-.274 2.94-.274h.08z" />
    </svg>
  );
}

export function DownloadIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

export function StarIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

export function CodeForkIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="18" r="3" />
      <circle cx="6" cy="6" r="3" />
      <circle cx="18" cy="6" r="3" />
      <path d="M18 9v2c0 .553-.447 1-1 1H7c-.553 0-1-.447-1-1V9" />
      <path d="M12 12v3" />
    </svg>
  );
}
