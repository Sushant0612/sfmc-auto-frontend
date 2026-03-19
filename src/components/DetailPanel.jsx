import StatusBadge from "./StatusBadge";
import TypeBadge from "./TypeBadge";

function Row({ label, value }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", padding: "10px 0", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
      <span style={{ fontSize: "11px", color: "#6b7280", textTransform: "uppercase", letterSpacing: "0.07em", fontWeight: 600, minWidth: 120 }}>{label}</span>
      <span style={{ fontSize: "12px", color: "#cbd5e1", textAlign: "right", fontFamily: "monospace", wordBreak: "break-all", maxWidth: "60%" }}>{value || "—"}</span>
    </div>
  );
}

export default function DetailPanel({ job, onClose }) {
  if (!job) return null;
  return (
    <div style={{
      background: "rgba(15,17,25,0.95)",
      border: "1px solid rgba(99,102,241,0.3)",
      borderRadius: "14px",
      padding: "24px",
      backdropFilter: "blur(12px)",
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
        <h3 style={{ margin: 0, fontSize: "16px", fontWeight: 700, color: "#f1f5f9", fontFamily: "'DM Serif Display', serif" }}>{job.name}</h3>
        <button
          onClick={onClose}
          style={{ background: "none", border: "1px solid rgba(255,255,255,0.1)", color: "#94a3b8", borderRadius: "8px", padding: "4px 10px", cursor: "pointer", fontSize: "18px", lineHeight: 1 }}
        >×</button>
      </div>
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <StatusBadge status={job.status} />
        <TypeBadge type={job.type} />
      </div>
      <Row label="ID" value={job.id} />
      <Row label="Key" value={job.key} />
      <Row label="Category ID" value={job.categoryId} />
      <Row label="Type ID" value={job.typeId} />
      <Row label="Status ID" value={job.statusId} />
      <Row label="Last Run Time" value={job.lastRunTime ? new Date(job.lastRunTime).toLocaleString() : null} />
      <Row label="Last Run Instance" value={job.lastRunInstanceId} />
      <Row label="Schedule Status" value={job.schedule?.scheduleStatus} />
      {job.description && <Row label="Description" value={job.description} />}
    </div>
  );
}
