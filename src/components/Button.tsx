import React from 'react';
import { buttonStyles } from '@ui/button';

const Button: React.FC = () => {
  return <button className={buttonStyles({ intent: 'primary', size: 'medium' })}>click</button>;
};

export default Button;
