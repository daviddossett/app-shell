import { IStyle, IStyleFunctionOrObject } from 'office-ui-fabric-react';

export interface IProjectMembersProps {
  styles?: IStyleFunctionOrObject<IProjectMembersStyleProps, IProjectMembersStyles>;
  className?: string;
}

export type IProjectMembersStyleProps = Pick<IProjectMembersProps, 'styles' | 'className'>;


export interface IProjectMembersStyles {
  root: IStyle;
}