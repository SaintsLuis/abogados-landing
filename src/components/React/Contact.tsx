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

// OpenStreetMap embed centered on 1 Gateway Center, Newark NJ (40.7357°N, 74.1724°W)
const RealMap: FC<{ label: string }> = ({ label }) => (
  <iframe
    src="https://www.openstreetmap.org/export/embed.html?bbox=-74.1924%2C40.7207%2C-74.1524%2C40.7507&layer=mapnik&marker=40.7357%2C-74.1724"
    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none', display: 'block' }}
    title={label}
    loading="lazy"
  />
);

interface Props {
  t: LangCopy;
  onCTA: () => void;
}

const Contact: FC<Props> = ({ t, onCTA }) => {
  const telDigits = (t.contact.tel || "").replace(/[^+\d]/g, "");
  const waDigits = (t.contact.wa || "").replace(/[^\d]/g, "");
  const mapLabel = `Map showing Sera Immigration Law office at ${t.contact.addr}`;
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
        <div className="sera-contact__map" aria-label={mapLabel}>
          <RealMap label={mapLabel} />
        </div>
      </div>
    </section>
  );
};

export default Contact;
