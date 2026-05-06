import type { FC } from 'react';

interface Props {
  label: string;
  ratio?: string;
  tone?: 'navy' | 'cream' | 'gold' | 'ink';
  tint?: 'navy' | 'cream' | 'gold' | 'ink';
  alt?: string;
}

const Placeholder: FC<Props> = ({ label, ratio = "4/5", tone = "navy", tint, alt }) => {
  const toneMap = {
    navy: { bg: "#0a1f3d", stripe: "#11294d", ink: "rgba(232,213,168,0.72)", border: "rgba(201,169,110,0.18)" },
    cream: { bg: "#f4ede0", stripe: "#ece3d0", ink: "rgba(10,31,61,0.55)", border: "rgba(10,31,61,0.12)" },
    gold: { bg: "#c9a96e", stripe: "#bf9d5f", ink: "rgba(10,31,61,0.7)", border: "rgba(10,31,61,0.18)" },
    ink: { bg: "#0d1424", stripe: "#141c30", ink: "rgba(244,237,224,0.55)", border: "rgba(244,237,224,0.1)" }
  };
  const c = toneMap[tint || tone] || toneMap.navy;
  const pid = `sp-${tone}-${(label || "").replace(/[^a-z0-9]/gi, "").slice(0, 6)}`;
  return (
    <div
      className="sera-ph"
      style={{ aspectRatio: ratio, background: c.bg, borderColor: c.border }}
      role="img"
      aria-label={alt || `Placeholder: ${label}`}
    >
      <svg className="sera-ph__svg" preserveAspectRatio="none" viewBox="0 0 100 100" aria-hidden={true}>
        <defs>
          <pattern id={pid} width="4" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="4" stroke={c.stripe} strokeWidth="2" />
          </pattern>
        </defs>
        <rect width="100" height="100" fill={`url(#${pid})`} />
      </svg>
      <div className="sera-ph__label" style={{ color: c.ink }} aria-hidden={true}>
        <span className="sera-ph__bracket">[</span>
        <span>{label}</span>
        <span className="sera-ph__bracket">]</span>
      </div>
    </div>
  );
};

export default Placeholder;
