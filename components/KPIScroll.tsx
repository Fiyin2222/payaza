"use client";

import KPICard from "./KPICard";

export default function KPIScroll() {
  return (
    <div className="flex gap-3 overflow-x-auto no-scrollbar">
      <KPICard title="Taps Today" value="120" />
      <KPICard title="Avg Tap" value="₦500" />
      <KPICard title="Revenue" value="₦12,000" />
    </div>
  );
}