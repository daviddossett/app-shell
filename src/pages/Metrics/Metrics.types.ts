import { IStyle, IStyleFunctionOrObject } from 'office-ui-fabric-react';

export interface IMetricsProps {
  styles?: IStyleFunctionOrObject<IMetricsStyleProps, IMetricsStyles>;
  className?: string;
}

export type IMetricsStyleProps = Pick<IMetricsProps, 'styles' | 'className'>;


export interface IMetricsStyles {
  root: IStyle;
}