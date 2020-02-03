import { IStyle, IStyleFunctionOrObject } from 'office-ui-fabric-react';

export interface ISuiteHeaderSearchProps {
  styles?: IStyleFunctionOrObject<ISuiteHeaderSearchStyleProps, ISuiteHeaderSearchStyles>;
  className?: string;
}

export type ISuiteHeaderSearchStyleProps = Pick<ISuiteHeaderSearchProps, 'styles' | 'className'>;


export interface ISuiteHeaderSearchStyles {
  root: IStyle;
}