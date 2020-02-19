import { IStyle, IStyleFunctionOrObject, ITheme } from 'office-ui-fabric-react';

export interface ISuiteHeaderProps {
  styles?: IStyleFunctionOrObject<ISuiteHeaderStyleProps, ISuiteHeaderStyles>;
  className?: string;
  theme?: ITheme;
  toggleNav: () => void;
}

export type ISuiteHeaderStyleProps = Pick<ISuiteHeaderProps, 'styles' | 'className' | 'theme'>;

export interface ISuiteHeaderStyles {
  root: IStyle;
  waffleWithTitle: IStyle;
}