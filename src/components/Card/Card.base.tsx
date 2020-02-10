import { getClassNames } from './Card.styles';
import { ICardProps } from './Card.types';
import React from 'react';
import { Avatar } from '../Avatar/Avatar';

export const CardBase: React.FC<ICardProps> = (props) => {
  const { styles } = props;
  const classNames = getClassNames(styles);
  
  return (
    <div className={classNames.root}>
      
    </div>
  );
}