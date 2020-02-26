import { IStyle, IStyleFunctionOrObject } from 'office-ui-fabric-react';

export interface ISegmentPageProps {
  styles?: IStyleFunctionOrObject<ISegmentPageStyleProps, ISegmentPageStyles>;
  className?: string;
}

export type ISegmentPageStyleProps = Pick<ISegmentPageProps, 'styles' | 'className'>;

export interface ISegmentPageStyles {
  root: IStyle;
}