"use client";

type Props = {
  title: string;
  value: string;
};

export default function KPICard({ title, value }: Props) {
  return (
    <div className="min-w-35 bg-white rounded-xl p-4 shadow-sm active:scale-95 transition">
      <p className="text-xs text-gray-500">{title}</p>
      <h2 className="text-lg font-semibold mt-1">{value}</h2>
    </div>
  );
}