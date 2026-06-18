import { highlightSegments } from '@/lib/search';

// Wraps the parts of `text` that match any search token in <mark>. With no
// tokens it renders the text untouched (zero overhead, no extra spans).
export function Highlight({ text, tokens }: { text: string; tokens: string[] }) {
  if (!tokens.length) return <>{text}</>;
  return (
    <>
      {highlightSegments(text, tokens).map((seg, i) =>
        seg.match ? (
          <mark key={i} className="rounded bg-brand-500/30 px-0.5 text-brand-200">
            {seg.text}
          </mark>
        ) : (
          <span key={i}>{seg.text}</span>
        )
      )}
    </>
  );
}
