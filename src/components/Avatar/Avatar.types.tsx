import { IStyle, IStyleFunctionOrObject } from 'office-ui-fabric-react';

export interface IAvatarProps {
  styles?: IStyleFunctionOrObject<IAvatarStyleProps, IAvatarStyles>;
  className?: string;
}

export interface IAvatarStyleProps {
  // className: string;
}

export interface IAvatarStyles {
  root: IStyle;
  avatar: IStyle;
}