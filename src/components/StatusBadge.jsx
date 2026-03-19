const STATUS_MAP = {
  Active: { label: "Active", color: "#00c896", bg: "rgba(0,200,150,0.12)" },
  Running: { label: "Running", color: "#4da6ff", bg: "rgba(77,166,255,0.12)" },
  Failed: { label: "Failed", color: "#ff5c5c", bg: "rgba(255,92,92,0.12)" },
  PausedSchedule: { label: "Paused", color: "#f0a500", bg: "rgba(240,165,0,0.12)" },
};

export default function StatusBadge({ status }) {
  const cfg = STATUS_MAP[status] || { label: status, color: "#aaa", bg: "rgba(170,170,170,0.1)" };
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        padding: "4px 12px",
        borderRadius: "999px",
        fontSize: "11px",
        fontWeight: 600,
        letterSpacing: "0.06em",
        textTransform: "uppercase",
        color: cfg.color,
        background: cfg.bg,
        border: `1px solid ${cfg.color}33`,
      }}
    >
      <span
        style={{
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: cfg.color,
          boxShadow: `0 0 6px ${cfg.color}`,
          animation: status === "Running" ? "pulse 1.5s ease-in-out infinite" : "none",
        }}
      />
      {cfg.label}
    </span>
  );
}
