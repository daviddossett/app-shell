import React from 'react';
import { getClassNames } from './Card.styles';
import { ICardProps } from './Card.types';

export const CardBase: React.FC<ICardProps> = (props) => {
  const { styles, text } = props;
  const classNames = getClassNames(styles);
  
  return (
    <div className={classNames.root}>
      <div className={classNames.contentArea}>
        <span className={classNames.contentAreaText}>{text}</span>
      </div>
    </div>
  );
}