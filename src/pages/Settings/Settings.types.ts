import { IStyle, IStyleFunctionOrObject } from 'office-ui-fabric-react';

export interface ISettingsProps {
  styles?: IStyleFunctionOrObject<ISettingsStyleProps, ISettingsStyles>;
  className?: string;
}

export type ISettingsStyleProps = Pick<ISettingsProps, 'styles' | 'className'>;


export interface ISettingsStyles {
  root: IStyle;
}