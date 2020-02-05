import { IStyle, IStyleFunctionOrObject } from 'office-ui-fabric-react';

export interface IQueriesProps {
  styles?: IStyleFunctionOrObject<IQueriesStyleProps, IQueriesStyles>;
  className?: string;
}

export type IQueriesStyleProps = Pick<IQueriesProps, 'styles' | 'className'>;


export interface IQueriesStyles {
  root: IStyle;
}