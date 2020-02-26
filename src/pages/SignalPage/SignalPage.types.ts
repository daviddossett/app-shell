import { IStyle, IStyleFunctionOrObject } from 'office-ui-fabric-react';

export interface ISignalPageProps {
  styles?: IStyleFunctionOrObject<ISignalPageStyleProps, ISignalPageStyles>;
  className?: string;
}

export type ISignalPageStyleProps = Pick<ISignalPageProps, 'styles' | 'className'>;

export interface ISignalPageStyles {
  root: IStyle;
}