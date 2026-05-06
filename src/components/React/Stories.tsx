import { useState, useEffect, type FC } from 'react';
import type { LangCopy } from '../../types/index';
import Eyebrow from './Eyebrow';

interface Props {
  t: LangCopy;
}

const Stories: FC<Props> = ({ t }) => {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const items = t.stories.items;
  const prev = () => setI(x => (x - 1 + items.length) % items.length);
  const next = () => setI(x => (x + 1) % items.length);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setI(x => (x + 1) % items.length), 7000);
    return () => clearInterval(id);
  }, [items.length, paused]);

  return (
    <section
      id="sera-stories"
      className="sera-section sera-stories"
      aria-labelledby="sera-stories-title"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="sera-stories__inner">
        <div className="sera-stories__head">
          <Eyebrow tone="cream">{t.stories.eyebrow}</Eyebrow>
          <h2 id="sera-stories-title" className="sera-h2 sera-h2--light">{t.stories.title}</h2>
        </div>
        <div className="sera-stories__stage" role="region" aria-roledescription="carousel" aria-label={t.stories.eyebrow}>
          <div
            className="sera-stories__track"
            style={{ transform: `translateX(-${i * 100}%)` }}
            aria-live="polite"
            aria-atomic={false}
          >
            {items.map((it, idx) => (
              <figure
                key={idx}
                className="sera-quote"
                role="group"
                aria-roledescription="slide"
                aria-label={`${idx + 1} of ${items.length}`}
                aria-hidden={idx !== i}
              >
                <span className="sera-quote__mark" aria-hidden={true}>"</span>
                <blockquote className="sera-quote__text">{it.quote}</blockquote>
                <figcaption className="sera-quote__cap">
                  <span className="sera-quote__who">{it.who}</span>
                  <span className="sera-quote__country">{it.country}</span>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="sera-stories__controls">
            <button type="button" className="sera-iconbtn" onClick={prev} aria-label={t.stories.prev}>
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden={true}>
                <path d="M15 4l-8 8 8 8" />
              </svg>
            </button>
            <div className="sera-stories__dots" role="tablist">
              {items.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  role="tab"
                  className={`sera-dot ${idx === i ? "is-on" : ""}`}
                  onClick={() => setI(idx)}
                  aria-selected={idx === i}
                  aria-label={`${t.stories.story} ${idx + 1}`}
                  tabIndex={idx === i ? 0 : -1}
                />
              ))}
            </div>
            <button type="button" className="sera-iconbtn" onClick={next} aria-label={t.stories.next}>
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden={true}>
                <path d="M9 4l8 8-8 8" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stories;
