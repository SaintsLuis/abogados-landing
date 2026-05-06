import type { FC } from 'react';
import type { LangCopy } from '../../types/index';

interface Props {
  t: LangCopy;
}

const TrustBar: FC<Props> = ({ t }) => {
  const items = [t.trust.countries, t.trust.langs, t.trust.member, t.trust.since];
  return (
    <section className="sera-trust" aria-label={t.trust.label}>
      <div className="sera-trust__rail" aria-hidden={true}>
        {[...items, ...items].map((it, i) => (
          <div key={i} className="sera-trust__item">
            <span className="sera-trust__dot" aria-hidden={true} />
            <span>{it}</span>
          </div>
        ))}
      </div>
      <ul className="sera-sr-only">
        {items.map((it, i) => <li key={i}>{it}</li>)}
      </ul>
    </section>
  );
};

export default TrustBar;
