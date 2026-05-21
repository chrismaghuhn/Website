type SectionLabelProps = {
  index: string;
  label: string;
  refCode?: string;
};

export function SectionLabel({ index, label, refCode }: SectionLabelProps) {
  return (
    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 border-b border-rule-on-base pb-3">
      <span className="font-mono text-xs tracking-widest text-accent-brass">
        {index}
      </span>
      <h2 className="font-serif text-2xl tracking-tight text-ink-on-base md:text-3xl">
        {label}
      </h2>
      {refCode ? (
        <span className="ml-auto font-mono text-[10px] uppercase tracking-[0.2em] text-ink-muted-on-base">
          {refCode}
        </span>
      ) : null}
    </div>
  );
}
