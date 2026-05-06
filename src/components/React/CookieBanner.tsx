import { useState, useEffect, type FC } from 'react';

interface Props {
  lang: string;
}

const COPY = {
  en: {
    text: "We use cookies to improve your experience. By continuing to browse, you agree to our",
    link: "privacy policy",
    accept: "Accept",
    decline: "Decline",
  },
  es: {
    text: "Usamos cookies para mejorar tu experiencia. Al seguir navegando, aceptas nuestra",
    link: "política de privacidad",
    accept: "Aceptar",
    decline: "Rechazar",
  },
};

const CookieBanner: FC<Props> = ({ lang }) => {
  const [visible, setVisible] = useState(false);
  const c = lang === 'es' ? COPY.es : COPY.en;

  useEffect(() => {
    try {
      if (!localStorage.getItem('sera-cookie-consent')) setVisible(true);
    } catch (_) {}
  }, []);

  const accept = () => {
    try { localStorage.setItem('sera-cookie-consent', 'accepted'); } catch (_) {}
    setVisible(false);
  };

  const decline = () => {
    try { localStorage.setItem('sera-cookie-consent', 'declined'); } catch (_) {}
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="sera-cookie" role="dialog" aria-label={c.accept}>
      <p className="sera-cookie__text">
        {c.text}{' '}
        <a href="/privacy" onClick={e => e.preventDefault()}>{c.link}</a>.
      </p>
      <div className="sera-cookie__actions">
        <button type="button" className="sera-btn sera-btn--ghost sera-btn--sm" onClick={decline}>
          {c.decline}
        </button>
        <button type="button" className="sera-btn sera-btn--gold sera-btn--sm" onClick={accept}>
          {c.accept}
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
