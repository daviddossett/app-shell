import { getClassNames } from './NavList.styles';
import { INavListProps } from './NavList.types';
import React, { Fragment } from 'react';
import { NavListItem } from '../NavListItem/NavListItem';

export const NavListBase: React.FC<INavListProps> = (props) => {
  const { styles, links } = props;
  const classNames = getClassNames(styles);

  return (
    <Fragment>
      {links.map(link => (
        <NavListItem to={link.to} text={link.text} />
      ))}
    </Fragment>
  );
}