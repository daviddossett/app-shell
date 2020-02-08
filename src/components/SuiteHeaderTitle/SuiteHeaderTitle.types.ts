import { IStyle, IStyleFunctionOrObject } from 'office-ui-fabric-react';

export interface ISuiteHeaderTitleProps {
  styles?: IStyleFunctionOrObject<ISuiteHeaderTitleStyleProps, ISuiteHeaderTitleStyles>;
  className?: string;
}

export interface ISuiteHeaderTitleStyleProps {
  // className: string;
}

export interface ISuiteHeaderTitleStyles {
  root: IStyle;
  short: IStyle;
  long: IStyle;
}