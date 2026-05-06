import type { FC } from 'react';
import type { LangCopy } from '../../types/index';
import Eyebrow from './Eyebrow';
import Placeholder from './Placeholder';

interface StatProps {
  n: string;
  l: string;
}

const Stat: FC<StatProps> = ({ n, l }) => (
  <div className="sera-stat">
    <div className="sera-stat__n" aria-hidden={true}>{n}</div>
    <div className="sera-stat__l"><span className="sera-sr-only">{n} </span>{l}</div>
  </div>
);

interface Props {
  t: LangCopy;
  onCTA: () => void;
  variant: string;
}

const Hero: FC<Props> = ({ t, onCTA, variant }) => (
  <section id="sera-hero" className={`sera-hero sera-hero--${variant}`}>
    <div className="sera-hero__grid">
      <div className="sera-hero__copy">
        <Eyebrow>{t.hero.eyebrow}</Eyebrow>
        <h1 className="sera-hero__title">
          <span className="sera-hero__line">{t.hero.title_a}</span>
          <span className="sera-hero__line">{t.hero.title_b}</span>
          <span className="sera-hero__line sera-hero__line--gold"><em>{t.hero.title_c}</em></span>
        </h1>
        <p className="sera-hero__sub">{t.hero.sub}</p>
        <div className="sera-hero__ctas">
          <button type="button" className="sera-btn sera-btn--gold" onClick={onCTA}>
            {t.hero.cta_primary}<span className="sera-btn__arrow" aria-hidden={true}>→</span>
          </button>
          <a
            href="#sera-contact"
            className="sera-btn sera-btn--ghost"
            onClick={e => {
              e.preventDefault();
              const el = document.getElementById("sera-contact");
              const root = document.querySelector(".sera-root");
              if (el && root) root.scrollTo({ top: el.offsetTop - 72, behavior: "smooth" });
            }}
          >
            {t.hero.cta_secondary}
          </a>
        </div>
        <div className="sera-hero__stats">
          <Stat n={t.hero.stat1_n} l={t.hero.stat1_l} />
          <Stat n={t.hero.stat2_n} l={t.hero.stat2_l} />
          <Stat n={t.hero.stat3_n} l={t.hero.stat3_l} />
        </div>
      </div>
      <div className="sera-hero__art">
        {variant === "portrait" && (
          <>
            <div className="sera-hero__art-main">
              <Placeholder label="cinematic portrait — family looking toward horizon, golden hour" ratio="4/5" tone="navy" />
            </div>
            <div className="sera-hero__art-side sera-hero__art-side--top">
              <Placeholder label="detail — hands holding documents" ratio="1/1" tone="cream" />
            </div>
            <div className="sera-hero__art-side sera-hero__art-side--bot">
              <Placeholder label="architecture — modern courthouse facade, B&W" ratio="3/4" tone="ink" />
            </div>
          </>
        )}
        {variant === "single" && (
          <div className="sera-hero__art-single">
            <Placeholder label="cinematic portrait — woman at SF skyline" ratio="3/4" tone="navy" />
          </div>
        )}
        {variant === "video" && (
          <div className="sera-hero__art-video">
            <Placeholder label="slow-motion video loop — arrival at city, B&W" ratio="9/16" tone="ink" />
            <div className="sera-hero__playbadge">
              <svg viewBox="0 0 24 24" width="14" height="14"><path d="M6 4l14 8-14 8z" fill="currentColor" /></svg>
              <span>Loop · 12s</span>
            </div>
          </div>
        )}
      </div>
    </div>
    <div className="sera-hero__corner sera-hero__corner--tl" aria-hidden />
    <div className="sera-hero__corner sera-hero__corner--tr" aria-hidden />
    <div className="sera-hero__corner sera-hero__corner--bl" aria-hidden />
    <div className="sera-hero__corner sera-hero__corner--br" aria-hidden />
  </section>
);

export default Hero;
