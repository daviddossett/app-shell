import { IStyle, IStyleFunctionOrObject } from 'office-ui-fabric-react';

export interface IPageHeaderProps {
  styles?: IStyleFunctionOrObject<IPageHeaderStyleProps, IPageHeaderStyles>;
  className?: string;
  text: string;
}

export type IPageHeaderStyleProps = Pick<IPageHeaderProps, 'styles' | 'className'>;


export interface IPageHeaderStyles {
  text: IStyle;
}