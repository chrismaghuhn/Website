type MetaRowProps = {
  label: string;
  value: string;
};

export function MetaRow({ label, value }: MetaRowProps) {
  return (
    <div className="grid grid-cols-[minmax(5rem,7rem)_1fr] gap-x-3 gap-y-0.5 border-b border-rule-on-paper/80 py-2 text-sm last:border-b-0">
      <dt className="font-mono text-[10px] uppercase tracking-wider text-ink-soft">
        {label}
      </dt>
      <dd className="font-sans text-ink">{value}</dd>
    </div>
  );
}
