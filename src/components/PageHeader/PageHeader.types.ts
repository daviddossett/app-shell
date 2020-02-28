import { IStyle, IStyleFunctionOrObject, ITheme } from 'office-ui-fabric-react';

export interface IPageHeaderProps {
  title: string;
  hasBackButton: boolean;
  styles?: IStyleFunctionOrObject<IPageHeaderStyleProps, IPageHeaderStyles>;
  className?: string;
  theme?: ITheme;
}

export type IPageHeaderStyleProps = Pick<IPageHeaderProps, 'styles' | 'className' | 'theme'>;


export interface IPageHeaderStyles {
  root: IStyle;
  backButton: IStyle;
  title: IStyle;
}