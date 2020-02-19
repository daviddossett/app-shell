import { IStyle, IStyleFunctionOrObject, ITheme } from 'office-ui-fabric-react';

export interface IOfficeWaffleMenuProps {
  styles?: IStyleFunctionOrObject<IOfficeWaffleMenuStyleProps, IOfficeWaffleMenuStyles>;
  className?: string;
  theme?: ITheme;
  toggleNav: () => void;
}

export type IOfficeWaffleMenuStyleProps = Pick<IOfficeWaffleMenuProps, 'styles' | 'className' | 'theme'>

export interface IOfficeWaffleMenuStyles {
  root: IStyle;
  small: IStyle;
  large: IStyle;
}