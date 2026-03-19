const TYPE_MAP = {
  scheduled: { icon: "⏱", color: "#a78bfa" },
  triggered: { icon: "⚡", color: "#60a5fa" },
  manual: { icon: "🖐", color: "#f472b6" },
};

export default function TypeBadge({ type }) {
  const cfg = TYPE_MAP[type] || { icon: "•", color: "#888" };
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: "5px", color: cfg.color, fontSize: "12px", fontWeight: 500 }}>
      <span>{cfg.icon}</span>
      <span style={{ textTransform: "capitalize" }}>{type}</span>
    </span>
  );
}
