import { styled } from 'office-ui-fabric-react';
import { INavListItemProps, INavListItemStyleProps, INavListItemStyles } from './NavListItem.types';
import { getStyles } from './NavListItem.styles';
import { NavListItemBase } from './NavListItem.base'

export const NavListItem = styled<INavListItemProps, INavListItemStyleProps, INavListItemStyles>(NavListItemBase, getStyles)