interface ResultCardProps {
  label: string;
  value: string;
  description?: string;
  highlight?: boolean;
}

export default function ResultCard({
  label,
  value,
  description,
  highlight = false,
}: ResultCardProps) {
  return (
    <div
      className={`p-6 rounded-xl border transition-colors ${
        highlight
          ? "bg-green/10 border-green/30"
          : "bg-white/5 border-white/10"
      }`}
    >
      <p className="text-xs font-semibold uppercase tracking-wider text-slate mb-2">
        {label}
      </p>
      <p
        className={`font-heading text-3xl md:text-4xl font-bold ${
          highlight ? "text-green" : "text-white"
        }`}
      >
        {value}
      </p>
      {description && (
        <p className="mt-2 text-sm text-slate leading-relaxed">{description}</p>
      )}
    </div>
  );
}
