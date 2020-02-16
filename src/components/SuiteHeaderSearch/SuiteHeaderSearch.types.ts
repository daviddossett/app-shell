import { IStyle, IStyleFunctionOrObject, ITheme } from 'office-ui-fabric-react';

export interface ISuiteHeaderSearchProps {
  styles?: IStyleFunctionOrObject<ISuiteHeaderSearchStyleProps, ISuiteHeaderSearchStyles>;
  className?: string;
  theme?: ITheme;
}

export type ISuiteHeaderSearchStyleProps = Pick<ISuiteHeaderSearchProps, 'styles' | 'className' | 'theme'>;


export interface ISuiteHeaderSearchStyles {
  root: IStyle;
  icon: IStyle;
  iconContainer: IStyle;
  field: IStyle;
  clearButton: IStyle;
}