import { IStyle, IStyleFunctionOrObject, ITheme } from 'office-ui-fabric-react';

export interface ICardProps {
  text: string;
  styles?: IStyleFunctionOrObject<ICardStyleProps, ICardStyles>;
  className?: string;
  theme?: ITheme;
}

export type ICardStyleProps = Pick<ICardProps, 'styles' | 'className' | 'theme'>;


export interface ICardStyles {
  root: IStyle;
  contentArea: IStyle;
  contentAreaText: IStyle;
}