import { useState, useMemo } from "react";
import { jobs as allJobs } from "./data/jobs";
import JobsTable from "./components/JobsTable";
import DetailPanel from "./components/DetailPanel";

const STATUSES = ["All", "Active", "Running", "Failed", "PausedSchedule"];

export default function App() {
  const [selected, setSelected] = useState(null);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const filtered = useMemo(() =>
    allJobs.filter(j => {
      const matchSearch = j.name.toLowerCase().includes(search.toLowerCase()) || j.id.includes(search);
      const matchStatus = statusFilter === "All" || j.status === statusFilter;
      return matchSearch && matchStatus;
    }), [search, statusFilter]);

  const handleRowClick = (job) => setSelected(job.id === selected?.id ? null : job);

  return (
    <div style={{ minHeight: "100vh", background: "#080a10", color: "#f1f5f9", fontFamily: "'DM Sans', sans-serif", padding: "40px 32px" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=DM+Serif+Display&display=swap');
        * { box-sizing: border-box; }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
        input::placeholder { color: #4b5563; }
        input:focus { outline: none; border-color: rgba(99,102,241,0.5) !important; }
      `}</style>

      {/* Header */}
      <div style={{ marginBottom: "32px" }}>
        <div style={{ fontSize: "11px", color: "#6366f1", textTransform: "uppercase", letterSpacing: "0.12em", fontWeight: 600, marginBottom: "6px" }}>
          Job Scheduler
        </div>
        <h1 style={{ margin: "0 0 4px", fontSize: "28px", fontWeight: 700, fontFamily: "'DM Serif Display', serif", letterSpacing: "-0.02em" }}>
          Advertiser Jobs
        </h1>
        <p style={{ margin: 0, color: "#6b7280", fontSize: "13px" }}>
          {filtered.length} of {allJobs.length} jobs · Click a row to inspect
        </p>
      </div>

      {/* Controls */}
      <div style={{ display: "flex", gap: "12px", marginBottom: "20px", flexWrap: "wrap" }}>
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search by name or ID…"
          style={{
            flex: "1 1 200px",
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "8px",
            padding: "9px 14px",
            color: "#f1f5f9",
            fontSize: "13px",
            transition: "border-color 0.15s",
          }}
        />
        <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
          {STATUSES.map(s => (
            <button
              key={s}
              onClick={() => setStatusFilter(s)}
              style={{
                padding: "8px 14px",
                borderRadius: "8px",
                fontSize: "12px",
                fontWeight: 500,
                cursor: "pointer",
                border: statusFilter === s ? "1px solid rgba(99,102,241,0.6)" : "1px solid rgba(255,255,255,0.08)",
                background: statusFilter === s ? "rgba(99,102,241,0.15)" : "rgba(255,255,255,0.04)",
                color: statusFilter === s ? "#a5b4fc" : "#9ca3af",
                transition: "all 0.15s",
              }}
            >
              {s === "PausedSchedule" ? "Paused" : s}
            </button>
          ))}
        </div>
      </div>

      {/* Main layout */}
      <div style={{ display: "grid", gridTemplateColumns: selected ? "1fr 340px" : "1fr", gap: "20px", alignItems: "start" }}>
        <JobsTable jobs={filtered} onRowClick={handleRowClick} selectedId={selected?.id} />
        {selected && <DetailPanel job={selected} onClose={() => setSelected(null)} />}
      </div>

      {filtered.length === 0 && (
        <div style={{ textAlign: "center", padding: "60px 0", color: "#4b5563" }}>
          <div style={{ fontSize: "32px", marginBottom: "12px" }}>🔍</div>
          <div>No jobs match your filters</div>
        </div>
      )}
    </div>
  );
}
