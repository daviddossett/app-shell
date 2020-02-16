import { IStyle, IStyleFunctionOrObject, ITheme } from 'office-ui-fabric-react';

export interface ISuiteHeaderTitleProps {
  styles?: IStyleFunctionOrObject<ISuiteHeaderTitleStyleProps, ISuiteHeaderTitleStyles>;
  className?: string;
  theme?: ITheme;
}

export type ISuiteHeaderTitleStyleProps = Pick<ISuiteHeaderTitleProps, 'styles' | 'className' | 'theme'>;

export interface ISuiteHeaderTitleStyles {
  root: IStyle;
  short: IStyle;
  long: IStyle;
}