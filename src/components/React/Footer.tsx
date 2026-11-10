import type { FC } from 'react';
import type { LangCopy } from '../../types/index';

interface Props {
  t: LangCopy;
}

const Footer: FC<Props> = ({ t }) => (
  <footer className="sera-footer" role="contentinfo">
    <div className="sera-footer__top">
      <div className="sera-footer__brand">
        <span className="sera-logo__mark sera-logo__mark--lg" aria-hidden={true}>
          <svg viewBox="0 0 32 32" fill="none">
            <path d="M4 24 L16 4 L28 24" stroke="currentColor" strokeWidth="1.6" />
            <line x1="10" y1="14.5" x2="22" y2="14.5" stroke="currentColor" strokeWidth="1.6" />
            <circle cx="16" cy="20" r="1.4" fill="currentColor" />
          </svg>
        </span>
        <p className="sera-footer__tag">{t.footer.tag}</p>
      </div>
      <nav className="sera-footer__cols" aria-label="Footer">
        {t.footer.cols.map(c => (
          <div key={c.h} className="sera-footer__col">
            <h2 className="sera-footer__h">{c.h}</h2>
            <ul>
              {c.l.map(it => (
                <li key={it}><a href="#">{it}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </div>
    <div className="sera-footer__bar">
      <small>
        {t.footer.bar}
        {' · '}Hecho por{' '}
        <a href="https://santosvluis.vercel.app" target="_blank" rel="noopener noreferrer">
          Luis Santos
        </a>
      </small>
      <span className="sera-footer__bar-r">Newark · New York · Philadelphia · Jersey City</span>
    </div>
  </footer>
);

export default Footer;
