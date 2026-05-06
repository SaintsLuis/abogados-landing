import type { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  tone?: 'gold' | 'cream';
}

const Eyebrow: FC<Props> = ({ children, tone = 'gold' }) => (
  <span className={`sera-eyebrow sera-eyebrow--${tone}`}>
    <span className="sera-eyebrow__dot" />{children}
  </span>
);

export default Eyebrow;
