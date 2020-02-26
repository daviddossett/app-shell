import { IStyle, IStyleFunctionOrObject } from 'office-ui-fabric-react';

export interface IReportsPageProps {
  styles?: IStyleFunctionOrObject<IReportsPageStyleProps, IReportsPageStyles>;
  className?: string;
}

export type IReportsPageStyleProps = Pick<IReportsPageProps, 'styles' | 'className'>;


export interface IReportsPageStyles {
  root: IStyle;
}