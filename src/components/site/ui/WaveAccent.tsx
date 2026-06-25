export function WaveAccent({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 900 180"
      preserveAspectRatio="none"
      className={`wave-accent pointer-events-none absolute ${className}`}
    >
      <path
        d="M-30 168 Q 450 -74 930 168"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M42 176 Q 450 -20 858 176"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity=".52"
      />
    </svg>
  );
}
