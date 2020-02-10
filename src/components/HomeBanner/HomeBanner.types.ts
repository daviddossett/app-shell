import { IStyle, IStyleFunctionOrObject } from 'office-ui-fabric-react';

export interface IHomeBannerProps {
  styles?: IStyleFunctionOrObject<IHomeBannerStyleProps, IHomeBannerStyles>;
  className?: string;
}

export type IHomeBannerStyleProps = Pick<IHomeBannerProps, 'styles' | 'className'>;


export interface IHomeBannerStyles {
  root: IStyle;
  newProjectContent: IStyle;
  icon: IStyle;
  heading: IStyle;
  description: IStyle;
  dismissButton: IStyle;
  link: IStyle;
  projectDetails: IStyle;
  projectName: IStyle;
}