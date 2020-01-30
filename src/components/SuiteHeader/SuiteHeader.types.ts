import { IStyle, IStyleFunctionOrObject } from 'office-ui-fabric-react';

export interface ISuiteHeaderProps {
  styles: IStyleFunctionOrObject<ISuiteHeaderStyleProps, ISuiteHeaderStyles>;
}

export interface ISuiteHeaderStyleProps {
  // What does this do? Why doesn't it break something even though it is required?
  className: string;
}

export interface ISuiteHeaderStyles {
  root: IStyle;
}