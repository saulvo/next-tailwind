import React from 'react';
import { card, CardProps } from '@ui/card';

interface Props extends CardProps {
  children: React.ReactNode;
}
const Card: React.FC<Props> = ({ children, ...styles }) => {
  return <div className={card(styles)}>{children}</div>;
};

export default Card;
