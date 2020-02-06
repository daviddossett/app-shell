import { styled } from 'office-ui-fabric-react';
import { INavListProps, INavListStyleProps, INavListStyles } from './NavList.types';
import { getStyles } from './NavList.styles';
import { NavListBase } from './NavList.base'

export const NavList = styled<INavListProps, INavListStyleProps, INavListStyles>(NavListBase, getStyles)