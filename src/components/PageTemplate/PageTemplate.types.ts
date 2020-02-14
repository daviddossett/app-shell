import { IStyle, IStyleFunctionOrObject, ICommandBarItemProps } from 'office-ui-fabric-react';

export interface IPageTemplateProps {
  styles?: IStyleFunctionOrObject<IPageTemplateStyleProps, IPageTemplateStyles>;
  className?: string;
  pageTitle: string;
  commands: ICommandBarItemProps[];
  farCommands: ICommandBarItemProps[];
  commandBarIsVisible: boolean;
}

export type IPageTemplateStyleProps = Pick<IPageTemplateProps, 'styles' | 'className'>;


export interface IPageTemplateStyles {
  root: IStyle;
  contentArea: IStyle;
  commandBar: IStyle;
}