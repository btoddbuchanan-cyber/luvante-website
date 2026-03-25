"use client";

interface SliderInputProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  unit?: string;
  prefix?: string;
  onChange: (value: number) => void;
}

export default function SliderInput({
  label,
  value,
  min,
  max,
  step = 1,
  unit = "",
  prefix = "",
  onChange,
}: SliderInputProps) {
  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <label className="text-sm font-medium text-slate">{label}</label>
        <span className="text-sm font-semibold text-green">
          {prefix}
          {value.toLocaleString()}
          {unit}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-2 rounded-full appearance-none cursor-pointer accent-green"
        style={{
          background: `linear-gradient(to right, #25ef75 0%, #25ef75 ${percentage}%, rgba(255,255,255,0.1) ${percentage}%, rgba(255,255,255,0.1) 100%)`,
        }}
      />
      <div className="flex justify-between mt-1">
        <span className="text-xs text-slate-dark">
          {prefix}
          {min.toLocaleString()}
          {unit}
        </span>
        <span className="text-xs text-slate-dark">
          {prefix}
          {max.toLocaleString()}
          {unit}
        </span>
      </div>
    </div>
  );
}
