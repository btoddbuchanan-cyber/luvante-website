interface SectionHeadingProps {
  tag?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeading({
  tag,
  title,
  description,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "text-center max-w-3xl mx-auto" : "max-w-3xl"}>
      {tag && (
        <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-widest text-green bg-green/10 rounded-full mb-4">
          {tag}
        </span>
      )}
      <h2
        className={`font-heading text-3xl md:text-4xl lg:text-5xl font-bold leading-tight ${
          light ? "text-navy-dark" : "text-white"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-lg leading-relaxed ${
            light ? "text-navy-dark/70" : "text-slate"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
