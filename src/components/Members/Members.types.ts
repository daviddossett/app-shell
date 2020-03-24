import { IStyle, IStyleFunctionOrObject,  ITheme } from 'office-ui-fabric-react';

export interface IMembersProps {
  styles?: IStyleFunctionOrObject<IMembersStyleProps, IMembersStyles>;
  className?: string;
  theme?: ITheme;
}

export type IMembersStyleProps = Pick<IMembersProps, 'styles' | 'className' | 'theme'>;

export interface IMembersStyles {
  root: IStyle;
}
