import { IStyle, IStyleFunctionOrObject, IIconProps } from 'office-ui-fabric-react';

export interface ISuiteHeaderIconProps {
  styles?: IStyleFunctionOrObject<ISuiteHeaderIconStyleProps, ISuiteHeaderIconStyles>;
  classNames?: string;
  icon: IIconProps;
}

export type ISuiteHeaderIconStyleProps = Pick<ISuiteHeaderIconProps, 'styles' | 'classNames' | 'icon'>;


export interface ISuiteHeaderIconStyles {
  root: IStyle;
}