import { useState, type FC } from 'react';
import type { LangCopy } from '../../types/index';
import Eyebrow from './Eyebrow';

interface PracticeIconProps {
  i: number;
}

const PracticeIcon: FC<PracticeIconProps> = ({ i }) => {
  const icons = [
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden={true}>
      <circle cx="10" cy="12" r="4" />
      <circle cx="22" cy="12" r="4" />
      <circle cx="16" cy="22" r="3" />
    </svg>,
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden={true}>
      <rect x="6" y="10" width="20" height="14" />
      <rect x="12" y="6" width="8" height="4" />
    </svg>,
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden={true}>
      <path d="M16 4 L26 10 V18 C26 23 21 27 16 28 C11 27 6 23 6 18 V10 Z" />
    </svg>,
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden={true}>
      <circle cx="16" cy="16" r="6" />
      <line x1="16" y1="3" x2="16" y2="6" />
      <line x1="16" y1="26" x2="16" y2="29" />
      <line x1="3" y1="16" x2="6" y2="16" />
      <line x1="26" y1="16" x2="29" y2="16" />
    </svg>,
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden={true}>
      <polygon points="16,4 19,13 28,13 21,19 24,28 16,22 8,28 11,19 4,13 13,13" />
    </svg>,
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden={true}>
      <line x1="6" y1="26" x2="26" y2="26" />
      <rect x="9" y="18" width="3" height="8" />
      <rect x="14.5" y="12" width="3" height="14" />
      <rect x="20" y="6" width="3" height="20" />
    </svg>
  ];
  return <span className="sera-card__icon" aria-hidden={true}>{icons[i % icons.length]}</span>;
};

interface Props {
  t: LangCopy;
  count: number;
}

const Practice: FC<Props> = ({ t, count }) => {
  const [open, setOpen] = useState(0);
  const areas = t.practice.areas.slice(0, count);
  return (
    <section id="sera-practice" className="sera-section sera-practice">
      <div className="sera-section__head">
        <Eyebrow>{t.practice.eyebrow}</Eyebrow>
        <h2 className="sera-h2">{t.practice.title}</h2>
        <p className="sera-lede">{t.practice.sub}</p>
      </div>
      <ul className="sera-practice__grid" role="list">
        {areas.map((a, i) => (
          <li key={a.n} className="sera-practice__cell">
            <a
              href="#sera-contact"
              className={`sera-card ${open === i ? "is-open" : ""}`}
              onMouseEnter={() => setOpen(i)}
              onFocus={() => setOpen(i)}
              onClick={e => { e.preventDefault(); setOpen(i); }}
              aria-label={`${a.t} — ${a.d}`}
            >
              <div className="sera-card__top">
                <span className="sera-card__num" aria-hidden={true}>{a.n}</span>
                <PracticeIcon i={i} />
              </div>
              <h3 className="sera-card__t">{a.t}</h3>
              <p className="sera-card__d">{a.d}</p>
              <ul className="sera-card__tags" role="list">
                {a.tags.map(tg => (
                  <li key={tg} className="sera-tag">{tg}</li>
                ))}
              </ul>
              <span className="sera-card__more" aria-hidden={true}><span>+</span></span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Practice;
