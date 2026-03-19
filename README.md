# Advertiser Jobs Dashboard

A React UI for displaying and inspecting scheduled job data.

## Project Structure

```
advertiser-exclusions/
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── src/
    ├── main.jsx              # React entry point
    ├── App.jsx               # Root component (search, filter, layout)
    ├── data/
    │   └── jobs.js           # Sample job data (swap with API call)
    └── components/
        ├── JobsTable.jsx     # Table with sortable rows
        ├── StatusBadge.jsx   # Colored status pill
        ├── TypeBadge.jsx     # Icon + type label
        └── DetailPanel.jsx   # Slide-in detail view on row click
```

## Getting Started

```bash
npm install
npm run dev
```

## Features
- Search by job name or ID
- Filter by status (All / Active / Running / Failed / Paused)
- Click any row to open a full detail panel
- Dark, minimal dashboard aesthetic
