import { useState, useEffect, useMemo } from 'react';
import { COPY } from '../../data/copy';
import TopNav from './TopNav';
import Hero from './Hero';
import TrustBar from './TrustBar';
import Practice from './Practice';
import Promise_ from './Promise';
import Process from './Process';
import Team from './Team';
import Stories from './Stories';
import Contact from './Contact';
import Footer from './Footer';
import EvalModal from './EvalModal';
import WhatsApp from './WhatsApp';

function shade(hex: string, pct: number): string {
  const h = hex.replace("#", "");
  const r = parseInt(h.substring(0, 2), 16);
  const g = parseInt(h.substring(2, 4), 16);
  const b = parseInt(h.substring(4, 6), 16);
  const f = pct / 100;
  return `#${[
    Math.round(r + (255 - r) * f),
    Math.round(g + (255 - g) * f),
    Math.round(b + (255 - b) * f)
  ].map(c => c.toString(16).padStart(2, "0")).join("")}`;
}

interface Tweaks {
  lang: string;
  heroVariant: string;
  accent: string;
  showWhatsApp: boolean;
  areasCount: number;
}

const DEFAULTS: Tweaks = {
  lang: "en",
  heroVariant: "portrait",
  accent: "#c9a96e",
  showWhatsApp: true,
  areasCount: 6
};

interface Props {
  artboard?: string;
}

function SeraLanding({ artboard = "desktop" }: Props) {
  const [tweaks, setTweaks] = useState<Tweaks>(DEFAULTS);
  const setTweak = (k: keyof Tweaks, v: string | boolean | number) => setTweaks(p => ({ ...p, [k]: v }));
  const lang = tweaks.lang;
  const t = COPY[lang as keyof typeof COPY] || COPY.en;
  const [evalOpen, setEvalOpen] = useState(false);
  const [openMobileNav, setOpenMobileNav] = useState(false);

  useEffect(() => {
    try {
      document.documentElement.lang = lang;
      document.title = `Sera Immigration Law — ${t.hero.title_a} ${t.hero.title_b} ${t.hero.title_c}`;
      const desc = document.querySelector('meta[name="description"]');
      if (desc) desc.setAttribute("content", t.hero.sub);
    } catch (_) {}
  }, [lang]);

  const accentStyle = useMemo(() => ({
    "--sera-gold": tweaks.accent,
    "--sera-gold-2": shade(tweaks.accent, 8),
    "--sera-gold-soft": shade(tweaks.accent, 35)
  } as React.CSSProperties), [tweaks.accent]);

  return (
    <div className="sera-root" style={accentStyle}>
      <TopNav
        lang={lang}
        setLang={v => setTweak("lang", v)}
        t={t}
        onCTA={() => setEvalOpen(true)}
        openMobileNav={openMobileNav}
        setOpenMobileNav={setOpenMobileNav}
      />
      <Hero t={t} onCTA={() => setEvalOpen(true)} variant={tweaks.heroVariant} />
      <TrustBar t={t} />
      <Practice t={t} count={tweaks.areasCount} />
      <Promise_ t={t} />
      <Process t={t} />
      <Team t={t} />
      <Stories t={t} />
      <Contact t={t} onCTA={() => setEvalOpen(true)} />
      <Footer t={t} />
      <EvalModal open={evalOpen} onClose={() => setEvalOpen(false)} t={t} />
      {tweaks.showWhatsApp && <WhatsApp t={t} />}
    </div>
  );
}

export default SeraLanding;
