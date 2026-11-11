export default function Arrow({ diagonal = false }) {
  return (
    <svg className="arrow-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d={diagonal ? "M5 15 15 5M5 5h10v10" : "M3 10h14M11 4l6 6-6 6"} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
