import StatusBadge from "./StatusBadge";
import TypeBadge from "./TypeBadge";

function formatDate(iso) {
  if (!iso) return "—";
  const d = new Date(iso);
  return d.toLocaleString("en-US", { month: "short", day: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit" });
}

function shortId(id) {
  return id ? `${id.slice(0, 8)}…` : "—";
}

const COL_STYLE = {
  padding: "14px 18px",
  fontSize: "13px",
  borderBottom: "1px solid rgba(255,255,255,0.05)",
  verticalAlign: "middle",
};

const HEADER_STYLE = {
  ...COL_STYLE,
  fontSize: "10px",
  fontWeight: 700,
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  color: "#6b7280",
  borderBottom: "1px solid rgba(255,255,255,0.08)",
  background: "rgba(255,255,255,0.02)",
};

export default function JobsTable({ jobs, onRowClick, selectedId }) {
  return (
    <div style={{ overflowX: "auto", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.08)" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "720px" }}>
        <thead>
          <tr>
            <th style={HEADER_STYLE}>ID</th>
            <th style={HEADER_STYLE}>Name</th>
            <th style={HEADER_STYLE}>Type</th>
            <th style={HEADER_STYLE}>Status</th>
            <th style={HEADER_STYLE}>Last Run</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job, i) => {
            const isSelected = job.id === selectedId;
            return (
              <tr
                key={job.id}
                onClick={() => onRowClick(job)}
                style={{
                  cursor: "pointer",
                  background: isSelected
                    ? "rgba(99,102,241,0.1)"
                    : i % 2 === 0
                    ? "transparent"
                    : "rgba(255,255,255,0.015)",
                  transition: "background 0.15s",
                  outline: isSelected ? "1px solid rgba(99,102,241,0.4)" : "none",
                }}
                onMouseEnter={(e) => {
                  if (!isSelected) e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                }}
                onMouseLeave={(e) => {
                  if (!isSelected) e.currentTarget.style.background = i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.015)";
                }}
              >
                <td style={{ ...COL_STYLE, fontFamily: "monospace", color: "#6b7280", fontSize: "11px" }}>{shortId(job.id)}</td>
                <td style={{ ...COL_STYLE, fontWeight: 600, color: "#f1f5f9" }}>{job.name}</td>
                <td style={COL_STYLE}><TypeBadge type={job.type} /></td>
                <td style={COL_STYLE}><StatusBadge status={job.status} /></td>
                <td style={{ ...COL_STYLE, color: "#94a3b8", fontFamily: "monospace", fontSize: "12px" }}>{formatDate(job.lastRunTime)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
