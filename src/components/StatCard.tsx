interface StatCardProps {
  value: string;
  label: string;
  delay?: number;
}

export default function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="flex flex-col items-center p-6 rounded-xl bg-white/5 border border-white/10">
      <span className="font-heading text-4xl md:text-5xl font-bold text-green">
        {value}
      </span>
      <span className="mt-2 text-sm text-slate text-center">{label}</span>
    </div>
  );
}
