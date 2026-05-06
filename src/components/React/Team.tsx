import type { FC } from 'react';
import type { LangCopy } from '../../types/index';
import Eyebrow from './Eyebrow';
import Placeholder from './Placeholder';

interface Props {
  t: LangCopy;
}

const Team: FC<Props> = ({ t }) => (
  <section id="sera-team" className="sera-section sera-team">
    <div className="sera-section__head">
      <Eyebrow>{t.team.eyebrow}</Eyebrow>
      <h2 className="sera-h2">{t.team.title}</h2>
    </div>
    <div className="sera-team__grid">
      {t.team.members.map((m, i) => (
        <article key={m.name} className="sera-member">
          <div className="sera-member__photo">
            <Placeholder label={`portrait — ${m.name.split(" ")[0]}, warm B&W`} ratio="3/4" tone={i % 2 === 0 ? "navy" : "cream"} />
          </div>
          <div className="sera-member__meta">
            <span className="sera-member__role">{m.role}</span>
            <span>{m.lang}</span>
          </div>
          <h3 className="sera-member__name">{m.name}</h3>
          <p className="sera-member__bio">{m.bio}</p>
        </article>
      ))}
    </div>
  </section>
);

export default Team;
