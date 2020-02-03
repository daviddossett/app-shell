import { IStyle, IStyleFunctionOrObject, IIconProps } from 'office-ui-fabric-react';

export interface ISuiteHeaderIconProps {
  styles?: IStyleFunctionOrObject<ISuiteHeaderIconStyleProps, ISuiteHeaderIconStyles>;
  className?: string;
  icon: IIconProps;
}

export type ISuiteHeaderIconStyleProps = Pick<ISuiteHeaderIconProps, 'styles' | 'className' | 'icon'>;


export interface ISuiteHeaderIconStyles {
  root: IStyle;
}