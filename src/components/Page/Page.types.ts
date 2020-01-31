import { ITheme, IStyleFunctionOrObject, IStyle } from "office-ui-fabric-react";

export interface IPageProps  {
  theme?: ITheme;
  styles?: IStyleFunctionOrObject<IPageStyleProps, IPageStyles>
  className?: string;
}

export type IPageStyleProps = Pick<IPageProps, 'theme' | 'styles' | 'className'>;

export interface IPageStyles {
  root: IStyle;
  area: IStyle;
  header: IStyle;
  nav: IStyle;
  content: IStyle;
}