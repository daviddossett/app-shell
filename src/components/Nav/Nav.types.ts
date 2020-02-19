import { ITheme, IStyleFunctionOrObject, IStyle } from 'office-ui-fabric-react';

export interface INavProps {
  className?: string;
  styles?: IStyleFunctionOrObject<INavStyleProps, INavStyles>; 
  theme?: ITheme;
  isNavOverlay: boolean;
  toggleNav: () => void;
}

export type INavStyleProps = Pick<INavProps, 'className' | 'styles' | 'theme'>;

export interface INavStyles {
  sidebarWithOverlay: IStyle;
  sidebarInLayout: IStyle;
}
