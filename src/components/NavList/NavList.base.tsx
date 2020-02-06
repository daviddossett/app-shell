import { getClassNames } from './NavList.styles';
import { INavListProps } from './NavList.types';
import React from 'react';

export const NavListBase: React.FC<INavListProps> = (props) => {
  const { styles } = props;
  const classNames = getClassNames(styles);

  return (
    <div />
  );
}