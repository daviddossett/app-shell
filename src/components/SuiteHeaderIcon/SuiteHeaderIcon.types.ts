import { IStyle, IStyleFunctionOrObject } from 'office-ui-fabric-react';

export interface ISuiteHeaderIconProps {
  styles?: IStyleFunctionOrObject<ISuiteHeaderIconStyleProps, ISuiteHeaderIconStyles>;
  className: string;
}

export interface ISuiteHeaderIconStyleProps {
  // className: string;
}

export interface ISuiteHeaderIconStyles {
  root: IStyle;
}