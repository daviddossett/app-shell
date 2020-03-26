import { IStyle, IStyleFunctionOrObject,  ITheme } from 'office-ui-fabric-react';

export interface IMemberCardProps {
  styles?: IStyleFunctionOrObject<IMemberCardStyleProps, IMemberCardStyles>;
  className?: string;
  theme?: ITheme;
}

export type IMemberCardStyleProps = Pick<IMemberCardProps, 'styles' | 'className' | 'theme'>;

export interface IMemberCardStyles {
  root: IStyle;
}
