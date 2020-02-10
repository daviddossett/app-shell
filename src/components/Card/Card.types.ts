import { IStyle, IStyleFunctionOrObject } from 'office-ui-fabric-react';

export interface ICardProps {
  styles?: IStyleFunctionOrObject<ICardStyleProps, ICardStyles>;
  className?: string;
}

export type ICardStyleProps = Pick<ICardProps, 'styles' | 'className'>;


export interface ICardStyles {
  root: IStyle;
}