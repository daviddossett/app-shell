import { IStyle, IStyleFunctionOrObject } from 'office-ui-fabric-react';

export interface ISuiteHeader {
  focus: () => void;
}

export interface ISuiteHeaderProps {
  title: string;
  styles?: IStyleFunctionOrObject<ISuiteHeaderStyleProps, ISuiteHeaderStyles>;
}

export interface ISuiteHeaderStyleProps {
  className?: string;
}

export interface ISuiteHeaderStyles {
  root: IStyle;
  title: IStyle;
}