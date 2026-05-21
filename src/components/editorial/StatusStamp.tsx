type StatusStampProps = {
  children: string;
};

export function StatusStamp({ children }: StatusStampProps) {
  return (
    <span className="inline-block border border-stamp/60 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.15em] text-stamp">
      {children}
    </span>
  );
}
