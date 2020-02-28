import { IStyle, IStyleFunctionOrObject, ICommandBarItemProps, ITheme } from 'office-ui-fabric-react';
import { ReactFragment } from 'react';

export interface IPageTemplateProps {
  pageTitle: string;
  hasBackButton: boolean;
  commandBarIsVisible: boolean;
  commands: ICommandBarItemProps[];
  farCommands: ICommandBarItemProps[];
  children?: ReactFragment;
  styles?: IStyleFunctionOrObject<IPageTemplateStyleProps, IPageTemplateStyles>;
  className?: string;
  theme?: ITheme;
}

export type IPageTemplateStyleProps = Pick<IPageTemplateProps, 'styles' | 'className' | 'theme'>;

export interface IPageTemplateStyles {
  root: IStyle;
  contentArea: IStyle;
  commandBar: IStyle;
  commandBarHidden: IStyle;
}