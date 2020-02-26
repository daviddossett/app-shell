import { IStyle, IStyleFunctionOrObject } from 'office-ui-fabric-react';

export interface ISourcePageProps {
  styles?: IStyleFunctionOrObject<ISourcePageStyleProps, ISourcePageStyles>;
  className?: string;
}

export type ISourcePageStyleProps = Pick<ISourcePageProps, 'styles' | 'className'>;

export interface ISourcePageStyles {
  root: IStyle;
}