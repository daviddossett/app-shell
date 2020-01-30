import { IStyle, IStyleFunctionOrObject } from 'office-ui-fabric-react';

export interface ISuiteHeader {
  focus: () => void;
}

export interface ISuiteHeaderProps {
  styles?: IStyleFunctionOrObject<ISuiteHeaderStyleProps, ISuiteHeaderStyles>;
  className?: string;
}

export interface ISuiteHeaderStyleProps {
  className?: string;
}

export interface ISuiteHeaderStyles {
  root: IStyle;
}