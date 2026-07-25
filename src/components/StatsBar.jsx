import { stats } from "../data/content";
import "./StatsBar.css";

export default function StatsBar() {
  return (
    <section className="stats-bar">
      {stats.map((s) => (
        <div className="stat-tile" key={s.label}>
          <span className="stat-value">
            {s.value}
            <span className="stat-suffix">{s.suffix}</span>
          </span>
          <span className="stat-label">{s.label}</span>
        </div>
      ))}
    </section>
  );
}
