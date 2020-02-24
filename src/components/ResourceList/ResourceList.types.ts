import { IStyle, IStyleFunctionOrObject, ITheme } from 'office-ui-fabric-react';
import { IDocument } from './Document.types';

export interface IResourceListProps {
  items?: IDocument[];
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
}