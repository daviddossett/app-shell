import { getClassNames } from './NavListItem.styles';
import { INavListItemProps } from './NavListItem.types';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from 'office-ui-fabric-react';

export const NavListItemBase: React.FC<INavListItemProps> = (props) => {
  const { styles, to, icon, text } = props;
  const classNames = getClassNames(styles);

  return (
    <NavLink to={to} className={classNames.root}>
      <span>{text}</span>
    </NavLink>
  );
}