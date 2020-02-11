import { IStyle, IStyleFunctionOrObject } from 'office-ui-fabric-react';

export interface IReportsProps {
  styles?: IStyleFunctionOrObject<IReportsStyleProps, IReportsStyles>;
  className?: string;
}

export type IReportsStyleProps = Pick<IReportsProps, 'styles' | 'className'>;


export interface IReportsStyles {
  root: IStyle;
}