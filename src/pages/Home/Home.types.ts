import { IStyle, IStyleFunctionOrObject } from 'office-ui-fabric-react';

export interface IHomeProps {
  styles?: IStyleFunctionOrObject<IHomeStyleProps, IHomeStyles>;
  className?: string;
}

export type IHomeStyleProps = Pick<IHomeProps, 'styles' | 'className'>;


export interface IHomeStyles {
  root: IStyle;
}