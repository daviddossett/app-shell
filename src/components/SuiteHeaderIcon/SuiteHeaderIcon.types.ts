import { IStyle, IStyleFunctionOrObject, IIconProps } from 'office-ui-fabric-react';

export interface ISuiteHeaderIconProps {
  styles?: IStyleFunctionOrObject<ISuiteHeaderIconStyleProps, ISuiteHeaderIconStyles>;
  classNames?: string;
  icon: IIconProps;
}

export interface ISuiteHeaderIconStyleProps {
  // className: string;
}

export interface ISuiteHeaderIconStyles {
  root: IStyle;
}