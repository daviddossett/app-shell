import { IStyle, IStyleFunctionOrObject, ITheme } from 'office-ui-fabric-react';

export interface IAvatarProps {
  styles?: IStyleFunctionOrObject<IAvatarStyleProps, IAvatarStyles>;
  className?: string;
  theme?: ITheme;
}

export type IAvatarStyleProps = Pick<IAvatarProps, 'styles' | 'className' | 'theme'>

export interface IAvatarStyles {
  root: IStyle;
  avatar: IStyle;
}