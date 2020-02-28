import { IStyle, IStyleFunctionOrObject, ITheme } from 'office-ui-fabric-react';
export interface IResourceListProps {
  items: Object[];
  styles?: IStyleFunctionOrObject<IResourceListStyleProps, IResourceListStyles>;
  className?: string;
  theme?: ITheme;
}

export type IResourceListStyleProps = Pick<IResourceListProps, 'styles' | 'className' | 'theme'>;

export interface IResourceListStyles {
  root: IStyle;
  fileIconHeaderIcon: IStyle;
  fileIconCell: IStyle;
  fileIconImg: IStyle;
  link: IStyle;
}