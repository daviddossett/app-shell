import { IStyle, IStyleFunctionOrObject } from 'office-ui-fabric-react';

export interface IMetricPageProps {
  styles?: IStyleFunctionOrObject<IMetricPageStyleProps, IMetricPageStyles>;
  className?: string;
}

export type IMetricPageStyleProps = Pick<IMetricPageProps, 'styles' | 'className'>;

export interface IMetricPageStyles {
  root: IStyle;
}