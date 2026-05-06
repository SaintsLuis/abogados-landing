import type { FC } from 'react';
import type { LangCopy } from '../../types/index';
import Eyebrow from './Eyebrow';

// Real Unsplash portraits — free, no API key required
const TEAM_PHOTOS = [
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80&fit=crop&crop=face",
];

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
            <div className="sera-ph" style={{ aspectRatio: '3/4', borderColor: 'rgba(201,169,110,0.18)' }}>
              <img
                src={TEAM_PHOTOS[i]}
                alt={`Portrait of ${m.name}, ${m.role} at Sera Immigration Law`}
                loading="lazy"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
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
