import { IStyle, IStyleFunctionOrObject, ITheme } from 'office-ui-fabric-react';

export interface ISuiteHeaderProps {
  styles?: IStyleFunctionOrObject<ISuiteHeaderStyleProps, ISuiteHeaderStyles>;
  className?: string;
  theme?: ITheme;
}

export interface ISuiteHeaderStyleProps {
  // className: string;
}

export interface ISuiteHeaderStyles {
  root: IStyle;
  waffleWithTitle: IStyle;
  search: IStyle;
  actions: IStyle;
}