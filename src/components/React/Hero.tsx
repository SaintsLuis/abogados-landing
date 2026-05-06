import { useState, useEffect, useRef, type FC } from 'react';
import type { LangCopy } from '../../types/index';
import Eyebrow from './Eyebrow';

// Real Unsplash images (free, no API key required)
const HERO_IMGS = {
  portrait_main: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=900&q=80&fit=crop",
  portrait_detail: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80&fit=crop",
  portrait_arch: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&q=80&fit=crop&sat=-100",
  single: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=700&q=80&fit=crop&crop=face",
  video_poster: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=700&q=80&fit=crop&sat=-60",
};

interface HeroImgProps {
  src: string;
  alt: string;
  ratio?: string;
  borderColor?: string;
  style?: React.CSSProperties;
}

const HeroImg: FC<HeroImgProps> = ({ src, alt, ratio = "4/5", borderColor = "rgba(201,169,110,0.22)", style }) => (
  <div className="sera-ph" style={{ aspectRatio: ratio, borderColor, ...style }}>
    <img
      src={src}
      alt={alt}
      loading="lazy"
      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
    />
  </div>
);

interface AnimatedStatProps {
  n: string;
  l: string;
}

const AnimatedStat: FC<AnimatedStatProps> = ({ n, l }) => {
  const isPercent = n.endsWith('%');
  const target = parseInt(n.replace(/[^0-9]/g, ''), 10);
  const [displayed, setDisplayed] = useState('0');
  const divRef = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = divRef.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplayed(n);
      return;
    }
    const obs = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || started.current) return;
      started.current = true;
      obs.disconnect();
      const duration = 1600;
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - (1 - p) ** 3;
        const cur = Math.round(eased * target);
        setDisplayed(isPercent ? `${cur}%` : `${cur}`);
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.6 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [n, target, isPercent]);

  return (
    <div className="sera-stat" ref={divRef}>
      <div className="sera-stat__n" aria-hidden={true}>{displayed}</div>
      <div className="sera-stat__l"><span className="sera-sr-only">{n} </span>{l}</div>
    </div>
  );
};

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
          <AnimatedStat n={t.hero.stat1_n} l={t.hero.stat1_l} />
          <AnimatedStat n={t.hero.stat2_n} l={t.hero.stat2_l} />
          <AnimatedStat n={t.hero.stat3_n} l={t.hero.stat3_l} />
        </div>
      </div>
      <div className="sera-hero__art">
        {variant === "portrait" && (
          <>
            <div className="sera-hero__art-main">
              <HeroImg
                src={HERO_IMGS.portrait_main}
                alt="Diverse family looking toward the horizon with hope"
                ratio="4/5"
              />
            </div>
            <div className="sera-hero__art-side sera-hero__art-side--top">
              <HeroImg
                src={HERO_IMGS.portrait_detail}
                alt="Hands carefully reviewing immigration documents"
                ratio="1/1"
              />
            </div>
            <div className="sera-hero__art-side sera-hero__art-side--bot">
              <HeroImg
                src={HERO_IMGS.portrait_arch}
                alt="Federal courthouse facade in Newark, NJ"
                ratio="3/4"
              />
            </div>
          </>
        )}
        {variant === "single" && (
          <div className="sera-hero__art-single">
            <HeroImg
              src={HERO_IMGS.single}
              alt="Immigration attorney in New York"
              ratio="3/4"
            />
          </div>
        )}
        {variant === "video" && (
          <div className="sera-hero__art-video">
            <HeroImg
              src={HERO_IMGS.video_poster}
              alt="City skyline at dusk"
              ratio="9/16"
              style={{ aspectRatio: '9/16' }}
            />
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
