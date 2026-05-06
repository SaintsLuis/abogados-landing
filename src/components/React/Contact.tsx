import type { FC } from 'react';
import type { LangCopy } from '../../types/index';
import Eyebrow from './Eyebrow';

interface ContactRowProps {
  t: string;
  v: string;
  accent?: boolean;
  href?: string;
  external?: boolean;
}

const ContactRow: FC<ContactRowProps> = ({ t, v, accent, href, external }) => (
  <div className={`sera-contact__row ${accent ? "is-accent" : ""}`}>
    <span className="sera-contact__rt">{t}</span>
    {href ? (
      <a className="sera-contact__rv" href={href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>{v}</a>
    ) : (
      <span className="sera-contact__rv">{v}</span>
    )}
  </div>
);

const FakeMap: FC = () => (
  <svg className="sera-map" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice" aria-hidden={true}>
    <defs>
      <pattern id="mapgrid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M40 0 L0 0 0 40" fill="none" stroke="rgba(10,31,61,0.08)" strokeWidth="1" />
      </pattern>
    </defs>
    <rect width="400" height="400" fill="#f4ede0" />
    <rect width="400" height="400" fill="url(#mapgrid)" />
    <path d="M-20 80 L420 60" stroke="rgba(10,31,61,0.18)" strokeWidth="2.5" />
    <path d="M-20 160 L420 140" stroke="rgba(10,31,61,0.22)" strokeWidth="3.5" />
    <path d="M-20 250 L420 230" stroke="rgba(10,31,61,0.18)" strokeWidth="2.5" />
    <path d="M-20 330 L420 310" stroke="rgba(10,31,61,0.18)" strokeWidth="2.5" />
    <path d="M70 -20 L60 420" stroke="rgba(10,31,61,0.18)" strokeWidth="2.5" />
    <path d="M180 -20 L170 420" stroke="rgba(10,31,61,0.22)" strokeWidth="3.5" />
    <path d="M290 -20 L300 420" stroke="rgba(10,31,61,0.18)" strokeWidth="2.5" />
    <path d="M-20 380 L420 -20" stroke="rgba(201,169,110,0.55)" strokeWidth="4" />
    <rect x="220" y="160" width="60" height="60" fill="rgba(10,31,61,0.06)" />
    <rect x="80" y="240" width="80" height="60" fill="rgba(10,31,61,0.06)" />
  </svg>
);

interface Props {
  t: LangCopy;
  onCTA: () => void;
}

const Contact: FC<Props> = ({ t, onCTA }) => {
  const telDigits = (t.contact.tel || "").replace(/[^+\d]/g, "");
  const waDigits = (t.contact.wa || "").replace(/[^\d]/g, "");
  return (
    <section id="sera-contact" className="sera-section sera-contact" aria-labelledby="sera-contact-title">
      <div className="sera-contact__grid">
        <div className="sera-contact__copy">
          <Eyebrow>{t.contact.eyebrow}</Eyebrow>
          <h2 id="sera-contact-title" className="sera-h2">{t.contact.title}</h2>
          <p className="sera-lede">{t.contact.sub}</p>
          <address className="sera-contact__list">
            <ContactRow t={t.contact.addr_t} v={t.contact.addr} />
            <ContactRow t={t.contact.hours_t} v={t.contact.hours} />
            <ContactRow t={t.contact.tel_t} v={t.contact.tel} href={`tel:${telDigits}`} />
            <ContactRow t={t.contact.wa_t} v={t.contact.wa} href={`https://wa.me/${waDigits}`} external accent />
            <ContactRow t={t.contact.mail_t} v={t.contact.mail} href={`mailto:${t.contact.mail}`} />
          </address>
          <button type="button" className="sera-btn sera-btn--gold" onClick={onCTA}>
            {t.nav.cta}<span className="sera-btn__arrow" aria-hidden={true}>→</span>
          </button>
        </div>
        <div className="sera-contact__map" role="img" aria-label={`Map showing office at ${t.contact.addr}`}>
          <FakeMap />
          <div className="sera-contact__pin" aria-hidden={true}>
            <div className="sera-contact__pin-dot" />
            <div className="sera-contact__pin-card">
              <div className="sera-contact__pin-name">Sera Immigration Law</div>
              <div className="sera-contact__pin-addr">1180 Mission St · SF</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
