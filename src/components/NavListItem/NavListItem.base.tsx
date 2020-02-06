import { getClassNames } from './NavListItem.styles';
import { INavListItemProps } from './NavListItem.types';
import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavListItemBase: React.FC<INavListItemProps> = (props) => {
  const { styles, to, text } = props;
  const classNames = getClassNames(styles);

  return (
    <NavLink to={to}>
      <span>{text}</span>
    </NavLink>
  );
}