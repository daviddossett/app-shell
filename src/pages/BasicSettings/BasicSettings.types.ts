import { IStyle, IStyleFunctionOrObject } from 'office-ui-fabric-react';

export interface IBasicSettingsProps {
  styles?: IStyleFunctionOrObject<IBasicSettingsStyleProps, IBasicSettingsStyles>;
  className?: string;
}

export type IBasicSettingsStyleProps = Pick<IBasicSettingsProps, 'styles' | 'className'>;


export interface IBasicSettingsStyles {
  root: IStyle;
  header: IStyle;
}