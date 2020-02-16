import { ITheme, IStyleFunctionOrObject, IStyle } from "office-ui-fabric-react";

export interface IPageProps  {
  styles?: IStyleFunctionOrObject<IPageStyleProps, IPageStyles>
  className?: string;
  theme?: ITheme;
}

export type IPageStyleProps = Pick<IPageProps, 'styles' | 'className' | 'theme'>;

export interface IPageStyles {
  root: IStyle;
  header: IStyle;
  nav: IStyle;
  content: IStyle;
}