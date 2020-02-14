import { IStyle, IStyleFunctionOrObject } from 'office-ui-fabric-react';

export interface ISignalsProps {
  styles?: IStyleFunctionOrObject<ISignalsStyleProps, ISignalsStyles>;
  className?: string;
}

export type ISignalsStyleProps = Pick<ISignalsProps, 'styles' | 'className'>;


export interface ISignalsStyles {
  root: IStyle;
}