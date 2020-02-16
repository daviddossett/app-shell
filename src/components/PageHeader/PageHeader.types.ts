import { IStyle, IStyleFunctionOrObject, ITheme } from 'office-ui-fabric-react';

export interface IPageHeaderProps {
  text: string;
  styles?: IStyleFunctionOrObject<IPageHeaderStyleProps, IPageHeaderStyles>;
  className?: string;
  theme?: ITheme;
}

export type IPageHeaderStyleProps = Pick<IPageHeaderProps, 'styles' | 'className' | 'theme'>;


export interface IPageHeaderStyles {
  text: IStyle;
}