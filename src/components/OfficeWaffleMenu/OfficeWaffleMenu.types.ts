import { IStyle, IStyleFunctionOrObject } from 'office-ui-fabric-react';

export interface IOfficeWaffleMenuProps {
  styles?: IStyleFunctionOrObject<IOfficeWaffleMenuStyleProps, IOfficeWaffleMenuStyles>;
  className?: string;
}

export interface IOfficeWaffleMenuStyleProps {
  // className: string;
}

export interface IOfficeWaffleMenuStyles {
  root: IStyle;
}