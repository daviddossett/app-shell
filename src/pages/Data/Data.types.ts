import { IStyle, IStyleFunctionOrObject } from 'office-ui-fabric-react';

export interface IDataProps {
  styles?: IStyleFunctionOrObject<IDataStyleProps, IDataStyles>;
  className?: string;
}

export type IDataStyleProps = Pick<IDataProps, 'styles' | 'className'>;


export interface IDataStyles {
  root: IStyle;
}