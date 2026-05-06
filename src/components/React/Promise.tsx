import type { FC } from 'react';
import type { LangCopy } from '../../types/index';
import Eyebrow from './Eyebrow';

interface Props {
  t: LangCopy;
}

const Promise_: FC<Props> = ({ t }) => (
  <section id="sera-promise" className="sera-section sera-promise">
    <div className="sera-promise__inner">
      <div className="sera-promise__col">
        <Eyebrow tone="cream">{t.promise.eyebrow}</Eyebrow>
        <h2 className="sera-h2 sera-h2--light">{t.promise.title}</h2>
      </div>
      <div className="sera-promise__col">
        <p className="sera-promise__body">{t.promise.body}</p>
        <p className="sera-promise__sign">{t.promise.sign}</p>
      </div>
    </div>
    <div className="sera-promise__rule" />
  </section>
);

export default Promise_;
