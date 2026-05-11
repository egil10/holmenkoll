import { LucideIcon } from "lucide-react";

export function StatCard({
  icon: Icon,
  label,
  value,
  hint,
  accent = "red",
}: {
  icon: LucideIcon;
  label: string;
  value: string;
  hint?: string;
  accent?: "red" | "blue" | "ink";
}) {
  const accentBg =
    accent === "red"
      ? "bg-no-red/10 text-no-red"
      : accent === "blue"
        ? "bg-no-blue/10 text-no-blue"
        : "bg-no-ink/10 text-no-ink";
  return (
    <div className="card flag-corner p-5 pl-6">
      <div className="flex items-center gap-3 mb-3">
        <span className={`w-9 h-9 rounded-lg flex items-center justify-center ${accentBg}`}>
          <Icon className="w-4.5 h-4.5" />
        </span>
        <span className="text-xs uppercase tracking-[0.16em] text-no-muted font-semibold">
          {label}
        </span>
      </div>
      <p className="serif text-3xl sm:text-4xl font-bold text-no-ink leading-tight">{value}</p>
      {hint && <p className="text-sm text-no-muted mt-1.5">{hint}</p>}
    </div>
  );
}
