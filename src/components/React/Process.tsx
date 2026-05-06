import { useState, type FC } from 'react';
import type { LangCopy } from '../../types/index';
import Eyebrow from './Eyebrow';

interface Props {
  t: LangCopy;
}

const Process: FC<Props> = ({ t }) => {
  const [active, setActive] = useState(0);
  return (
    <section id="sera-process" className="sera-section sera-process">
      <div className="sera-section__head sera-section__head--center">
        <Eyebrow>{t.process.eyebrow}</Eyebrow>
        <h2 className="sera-h2">{t.process.title}</h2>
      </div>
      <div className="sera-process__rail">
        <div className="sera-process__line" />
        <div className="sera-process__steps">
          {t.process.steps.map((s, i) => (
            <div key={s.n} className={`sera-step ${active === i ? "is-active" : ""}`} onMouseEnter={() => setActive(i)}>
              <div className="sera-step__node"><span>{s.n}</span></div>
              <div>
                <h4 className="sera-step__t">{s.t}</h4>
                <p className="sera-step__d">{s.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
