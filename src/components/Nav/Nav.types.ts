import { ITheme, IStyleFunctionOrObject, IStyle } from 'office-ui-fabric-react';


export interface INavProps {
  className?: string;
  styles?: IStyleFunctionOrObject<INavStyleProps, INavStyles>; 
  theme?: ITheme;
}

export type INavStyleProps = Pick<INavProps, 'className' | 'styles' | 'theme'>;

export interface INavStyles {
  root: IStyle;
}
