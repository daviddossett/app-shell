import { IStyle, IStyleFunctionOrObject } from 'office-ui-fabric-react';

export interface ISuiteHeaderActionsProps {
  styles?: IStyleFunctionOrObject<ISuiteHeaderActionsStyleProps, ISuiteHeaderActionsStyles>;
  className?: string;
}

export interface ISuiteHeaderActionsStyleProps {
  // className: string;
}

export interface ISuiteHeaderActionsStyles {
  root: IStyle;
}