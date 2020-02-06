import { IStyle, IStyleFunctionOrObject } from 'office-ui-fabric-react';

export interface INavListProps {
  styles?: IStyleFunctionOrObject<INavListStyleProps, INavListStyles>;
  className?: string;
}

export type INavListStyleProps = Pick<INavListProps, 'styles' | 'className'>;


export interface INavListStyles {
  root: IStyle;
}