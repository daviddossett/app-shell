import React from 'react';
import { getClassNames } from './MemberCard.styles';
import { IMembersProps } from './MemberCard.types';

export const MembersBase: React.FC<IMembersProps> = (props) => {
  const { styles } = props;
  const classNames = getClassNames(styles);

  return (
    <>
    </>
  );
}
