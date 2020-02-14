import { IStyle, IStyleFunctionOrObject } from 'office-ui-fabric-react';

export interface ISourcesProps {
  styles?: IStyleFunctionOrObject<ISourcesStyleProps, ISourcesStyles>;
  className?: string;
}

export type ISourcesStyleProps = Pick<ISourcesProps, 'styles' | 'className'>;


export interface ISourcesStyles {
  root: IStyle;
}