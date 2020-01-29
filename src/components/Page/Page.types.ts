import { ITheme, IStyleFunctionOrObject, IStyle } from "office-ui-fabric-react";

export interface IPageProps  {
  theme?: ITheme;
  styles?: IStyleFunctionOrObject<IPageStyleProps, IPageStyles>
}

export type IPageStyleProps = Pick<IPageProps, 'theme' | 'styles'>;

export interface IPageStyles {
  root: IStyle;
}