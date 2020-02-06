import { IStyle, IStyleFunctionOrObject } from 'office-ui-fabric-react';
import { INavListItemProps } from '../NavListItem/NavListItem.types';

export interface INavListProps {
  styles?: IStyleFunctionOrObject<INavListStyleProps, INavListStyles>;
  className?: string;
  links: INavListItemProps[]
};

export type INavListStyleProps = Pick<INavListProps, 'styles' | 'className'>;


export interface INavListStyles {
  root: IStyle;
}