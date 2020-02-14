import { IStyle, IStyleFunctionOrObject, ICommandBarItemProps } from 'office-ui-fabric-react';
import { ReactElement, ReactFragment } from 'react';

export interface IPageTemplateProps {
  pageTitle: string;
  commandBarIsVisible: boolean;
  commands: ICommandBarItemProps[];
  farCommands: ICommandBarItemProps[];
  children?: ReactFragment;
  styles?: IStyleFunctionOrObject<IPageTemplateStyleProps, IPageTemplateStyles>;
  className?: string;
}

export type IPageTemplateStyleProps = Pick<IPageTemplateProps, 'styles' | 'className'>;

export interface IPageTemplateStyles {
  root: IStyle;
  contentArea: IStyle;
  commandBar: IStyle;
  commandBarHidden: IStyle;
}