import React from 'react';
import { getClassNames } from './MemberCard.styles';
import { IMemberCardProps } from './MemberCard.types';

export const MemberCardBase: React.FC<IMemberCardProps> = (props) => {
  const { styles } = props;
  const classNames = getClassNames(styles);

  return (
    <div className={classNames.root}></div>
  );
}
