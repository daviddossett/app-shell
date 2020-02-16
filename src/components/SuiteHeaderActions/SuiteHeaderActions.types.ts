import { IStyle, IStyleFunctionOrObject, ITheme } from 'office-ui-fabric-react';

export interface ISuiteHeaderActionsProps {
  styles?: IStyleFunctionOrObject<ISuiteHeaderActionsStyleProps, ISuiteHeaderActionsStyles>;
  className?: string;
  theme?: ITheme;
}

export type ISuiteHeaderActionsStyleProps = Pick<ISuiteHeaderActionsProps, 'styles' | 'className' | 'theme'>;

export interface ISuiteHeaderActionsStyles {
  root: IStyle;
  smallMenu: IStyle;
  fullMenu: IStyle;
}