import { IStyle, IStyleFunctionOrObject, ITheme } from 'office-ui-fabric-react';

export interface IResourceListProps {
  styles?: IStyleFunctionOrObject<IResourceListStyleProps, IResourceListStyles>;
  className?: string;
  theme?: ITheme;
}

export type IResourceListStyleProps = Pick<IResourceListProps, 'styles' | 'className' | 'theme'>;


export interface IResourceListStyles {
  root: IStyle;
}