import { IStyle, IStyleFunctionOrObject } from 'office-ui-fabric-react';

export interface ISegmentsProps {
  styles?: IStyleFunctionOrObject<ISegmentsStyleProps, ISegmentsStyles>;
  className?: string;
}

export type ISegmentsStyleProps = Pick<ISegmentsProps, 'styles' | 'className'>;


export interface ISegmentsStyles {
  root: IStyle;
}