import { IStyle, IStyleFunctionOrObject } from 'office-ui-fabric-react';
import { NavLinkProps } from 'react-router-dom';

export interface INavListItemProps extends NavLinkProps {
  styles?: IStyleFunctionOrObject<INavListItemStyleProps, INavListItemStyles>;
  className?: string;
  to: string;
  text: string;
}

export type INavListItemStyleProps = Pick<INavListItemProps, 'styles' | 'className' | 'text'>;


export interface INavListItemStyles {
  root: IStyle;
}