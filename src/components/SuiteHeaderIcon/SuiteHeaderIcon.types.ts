import { IStyle, IStyleFunctionOrObject, IIconProps, ITheme } from 'office-ui-fabric-react';

export interface ISuiteHeaderIconProps {
  icon: IIconProps;
  styles?: IStyleFunctionOrObject<ISuiteHeaderIconStyleProps, ISuiteHeaderIconStyles>;
  className?: string;
  theme?: ITheme;
}

export type ISuiteHeaderIconStyleProps = Pick<ISuiteHeaderIconProps, 'styles' | 'className' | 'theme' | 'icon'>;


export interface ISuiteHeaderIconStyles {
  root: IStyle;
}