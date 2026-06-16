// Animated equalizer wave — the app's signature recording indicator.
// Same 5-bar treatment as src/App.tsx WaveIndicator, rendered in the brand's
// red "recording" color so it reads as "active listening" on the landing page.

export function WaveIndicator({
  color = "bg-red-500",
  animate = true,
  className = "",
}: {
  color?: string;
  animate?: boolean;
  className?: string;
}) {
  const bars = [0, 1, 2, 3, 4];
  return (
    <div className={`flex h-7 w-10 items-center justify-center gap-[3px] ${className}`}>
      {bars.map((i) => (
        <span
          key={i}
          className={`w-[4px] rounded-full ${color} ${animate ? "voice-wave" : "h-2"}`}
          style={
            animate
              ? { animationDelay: `${i * 0.13}s` }
              : { height: `${[8, 14, 18, 14, 8][i]}px` }
          }
        />
      ))}
    </div>
  );
}
