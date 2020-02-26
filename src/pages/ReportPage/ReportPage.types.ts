import { IStyle, IStyleFunctionOrObject } from 'office-ui-fabric-react';

export interface IReportPageProps {
  styles?: IStyleFunctionOrObject<IReportPageStyleProps, IReportPageStyles>;
  className?: string;
}

export type IReportPageStyleProps = Pick<IReportPageProps, 'styles' | 'className'>;

export interface IReportPageStyles {
  root: IStyle;
}