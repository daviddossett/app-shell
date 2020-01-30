import { styled } from 'office-ui-fabric-react';
import { INavProps, INavStyleProps, INavStyles } from './Nav.types';
import { NavBase } from './Nav.base';
import { styles } from './Nav.styles';

export const Nav = styled<INavProps, INavStyleProps, INavStyles>(
  NavBase,
  styles
)