import StatusBadge from "./StatusBadge";
import TypeBadge from "./TypeBadge";

function shortId(id) {
  return id ? id.split("-")[0].toUpperCase() : "—";
}

function formatDate(iso) {
  if (!iso) return "—";
  const d = new Date(iso);
  return d.toLocaleString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
}

export default function JobTable({ jobs }) {
  return (
    <div className="table-card">
      <div className="table-toolbar">
        <span className="table-count">{jobs.length} jobs found</span>
      </div>
      <div className="table-scroll">
        <table className="data-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Type</th>
              <th>Status</th>
              <th>Last Run Time</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => (
              <tr key={job.id} className="table-row">
                <td className="cell-id">
                  <span className="id-chip">{shortId(job.id)}</span>
                  <span className="id-full">{job.id}</span>
                </td>
                <td className="cell-name">
                  <span className="job-name">{job.name}</span>
                  {job.description && (
                    <span className="job-desc">{job.description}</span>
                  )}
                </td>
                <td>
                  <TypeBadge type={job.type} />
                </td>
                <td>
                  <StatusBadge status={job.status} />
                </td>
                <td className="cell-date">{formatDate(job.lastRunTime)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
