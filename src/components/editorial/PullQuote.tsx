type PullQuoteProps = {
  children: string;
};

export function PullQuote({ children }: PullQuoteProps) {
  return (
    <blockquote className="border-l-2 border-accent pl-5 font-serif text-lg leading-relaxed text-ink md:text-xl">
      {children}
    </blockquote>
  );
}
