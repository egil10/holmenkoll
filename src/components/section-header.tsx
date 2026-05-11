export function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-8 sm:mb-10">
      {eyebrow && (
        <p className="text-xs uppercase tracking-[0.2em] text-no-red font-semibold mb-2">
          {eyebrow}
        </p>
      )}
      <h2 className="serif text-3xl sm:text-4xl font-bold text-no-ink tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base text-no-muted max-w-2xl leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}
