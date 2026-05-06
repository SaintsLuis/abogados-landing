import { useState, type FC } from 'react';
import type { LangCopy } from '../../types/index';

interface Props {
  t: LangCopy;
}

const WhatsApp: FC<Props> = ({ t }) => {
  const [hover, setHover] = useState(false);
  const waNum = (t.contact && t.contact.wa ? t.contact.wa : "+1 415 555 0142").replace(/[^\d]/g, "");
  return (
    <div
      className="sera-wa"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onFocusCapture={() => setHover(true)}
      onBlurCapture={() => setHover(false)}
    >
      <div className={`sera-wa__tip ${hover ? "is-on" : ""}`} aria-hidden={true}>
        <div className="sera-wa__tip-l">{t.wa.label}</div>
        <div className="sera-wa__tip-s">{t.wa.tip}</div>
      </div>
      <a
        className="sera-wa__btn"
        href={`https://wa.me/${waNum}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${t.wa.label} — ${t.wa.tip}`}
      >
        <svg viewBox="0 0 32 32" width="22" height="22" fill="currentColor" aria-hidden={true}>
          <path d="M16 3C8.8 3 3 8.8 3 16c0 2.4.7 4.7 1.9 6.7L3 29l6.5-1.8c1.9 1 4.1 1.6 6.5 1.6 7.2 0 13-5.8 13-13S23.2 3 16 3zm0 23.6c-2.1 0-4.1-.6-5.8-1.6l-.4-.2-3.9 1 1-3.8-.3-.4C5.5 19.9 4.9 18 4.9 16 4.9 9.9 9.9 4.9 16 4.9S27.1 9.9 27.1 16 22.1 26.6 16 26.6zm6.1-8c-.3-.2-2-1-2.3-1.1-.3-.1-.5-.2-.8.2s-.9 1.1-1.1 1.3c-.2.2-.4.2-.7.1-.3-.2-1.4-.5-2.6-1.6-1-.9-1.6-2-1.8-2.3-.2-.3 0-.5.1-.7l.5-.6c.2-.2.2-.3.4-.5.1-.2.1-.4 0-.5-.1-.2-.8-1.9-1.1-2.6-.3-.7-.6-.6-.8-.6h-.7c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.9 0 1.7 1.2 3.4 1.4 3.6.2.2 2.4 3.7 5.9 5.2.8.4 1.5.6 2 .7.8.3 1.6.2 2.2.1.7-.1 2-.8 2.3-1.6.3-.8.3-1.5.2-1.6-.1-.1-.3-.2-.6-.4z" />
        </svg>
      </a>
    </div>
  );
};

export default WhatsApp;
