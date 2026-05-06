import { useState, useEffect, type FC } from 'react';
import type { LangCopy } from '../../types/index';

interface Props {
  lang: string;
  setLang: (lang: string) => void;
  t: LangCopy;
  onCTA: () => void;
  openMobileNav: boolean;
  setOpenMobileNav: (fn: ((v: boolean) => boolean) | boolean) => void;
}

const TopNav: FC<Props> = ({ lang, setLang, t, onCTA, openMobileNav, setOpenMobileNav }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState("hero");

  useEffect(() => {
    const root = document.querySelector(".sera-root");
    if (!root) return;
    const onScroll = () => {
      setScrolled(root.scrollTop > 24);
      const sections = ["hero", "practice", "process", "team", "stories", "contact"];
      const top = root.scrollTop + 120;
      let cur = "hero";
      for (const id of sections) {
        const el = document.getElementById(`sera-${id}`);
        if (el && el.offsetTop <= top) cur = id;
      }
      setActiveId(cur);
    };
    root.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => root.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { id: "practice", label: t.nav.practice },
    { id: "process", label: t.nav.process },
    { id: "team", label: t.nav.team },
    { id: "stories", label: t.nav.stories },
    { id: "contact", label: t.nav.contact }
  ];

  const go = (e: React.MouseEvent | null, id: string) => {
    if (e) e.preventDefault();
    const el = document.getElementById(`sera-${id}`);
    const root = document.querySelector(".sera-root");
    if (el && root) root.scrollTo({ top: el.offsetTop - 72, behavior: "smooth" });
    setOpenMobileNav(false);
  };

  return (
    <header className={`sera-nav ${scrolled ? "is-scrolled" : ""}`} role="banner">
      <a href="#sera-main" className="sera-skip" onClick={e => go(e as React.MouseEvent, "main")}>{t.nav.skip}</a>
      <div className="sera-nav__inner">
        <a className="sera-logo" href="#sera-hero" onClick={e => go(e as React.MouseEvent, "hero")} aria-label={`${t.nav.home} — Sera Immigration Law`}>
          <span className="sera-logo__mark" aria-hidden={true}>
            <svg viewBox="0 0 32 32" fill="none">
              <path d="M4 24 L16 4 L28 24" stroke="currentColor" strokeWidth="1.6" />
              <line x1="10" y1="14.5" x2="22" y2="14.5" stroke="currentColor" strokeWidth="1.6" />
              <circle cx="16" cy="20" r="1.4" fill="currentColor" />
            </svg>
          </span>
          <span className="sera-logo__word">
            <span className="sera-logo__name">Sera</span>
            <span className="sera-logo__sub">Immigration Law</span>
          </span>
        </a>
        <nav className="sera-nav__links" aria-label="Primary">
          {links.map(l => (
            <a
              key={l.id}
              href={`#sera-${l.id}`}
              className="sera-nav__link"
              onClick={e => go(e as React.MouseEvent, l.id)}
              aria-current={activeId === l.id ? "page" : undefined}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="sera-nav__right">
          <div className="sera-lang" role="group" aria-label={t.nav.lang_label}>
            <button
              type="button"
              className={lang === "en" ? "is-on" : ""}
              onClick={() => setLang("en")}
              aria-pressed={lang === "en"}
              aria-label="English"
              lang="en"
            >EN</button>
            <span className="sera-lang__sep" aria-hidden={true}>/</span>
            <button
              type="button"
              className={lang === "es" ? "is-on" : ""}
              onClick={() => setLang("es")}
              aria-pressed={lang === "es"}
              aria-label="Español"
              lang="es"
            >ES</button>
          </div>
          <button
            type="button"
            className="sera-btn sera-btn--gold sera-btn--sm sera-nav__cta"
            onClick={onCTA}
          >
            {t.nav.cta}<span className="sera-btn__arrow" aria-hidden={true}>→</span>
          </button>
          <button
            type="button"
            className="sera-nav__burger"
            onClick={() => setOpenMobileNav((v: boolean) => !v)}
            aria-label={openMobileNav ? t.nav.close_menu : t.nav.open_menu}
            aria-expanded={openMobileNav}
            aria-controls="sera-mobile-nav"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
      <div id="sera-mobile-nav" className="sera-nav__mobile" hidden={!openMobileNav}>
        {links.map(l => (
          <a key={l.id} href={`#sera-${l.id}`} className="sera-nav__mlink" onClick={e => go(e as React.MouseEvent, l.id)}>
            {l.label}
          </a>
        ))}
      </div>
    </header>
  );
};

export default TopNav;
