import React from 'react';
import { getClassNames } from './Members.styles';
import { IMembersProps } from './Members.types';

export const MembersBase: React.FC<IMembersProps> = (props) => {
  const { styles } = props;
  const classNames = getClassNames(styles);

  return (
    <>
    </>
  );
}
