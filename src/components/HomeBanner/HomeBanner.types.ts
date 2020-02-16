import { IStyle, IStyleFunctionOrObject, ITheme } from 'office-ui-fabric-react';

export interface IHomeBannerProps {
  styles?: IStyleFunctionOrObject<IHomeBannerStyleProps, IHomeBannerStyles>;
  className?: string;
  theme?: ITheme;
}

export type IHomeBannerStyleProps = Pick<IHomeBannerProps, 'styles' | 'className' | 'theme'>;

export interface IHomeBannerStyles {
  root: IStyle;
  banner: IStyle;
  icon: IStyle;
  infoText: IStyle;
  heading: IStyle;
  description: IStyle;
  actions: IStyle;
  dismissButton: IStyle;
  link: IStyle;
  cardWrapper: IStyle;
  card: IStyle;
  contentArea: IStyle;
  text: IStyle;
}