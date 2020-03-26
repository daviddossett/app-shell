import { IStyle, IStyleFunctionOrObject } from 'office-ui-fabric-react';

export interface ISignalPageProps {
  styles?: IStyleFunctionOrObject<ISignalPageStyleProps, ISignalPageStyles>;
  className?: string;
}

export type ISignalPageStyleProps = Pick<ISignalPageProps, 'styles' | 'className'>;

export interface ISignalPageStyles {
  signalPageGrid: IStyle;
  card1: IStyle;
  card2: IStyle;
  card3: IStyle;
  card4: IStyle;
}
