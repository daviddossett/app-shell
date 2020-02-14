import { IStyle, IStyleFunctionOrObject } from 'office-ui-fabric-react';

export interface IBillingProps {
  styles?: IStyleFunctionOrObject<IBillingStyleProps, IBillingStyles>;
  className?: string;
}

export type IBillingStyleProps = Pick<IBillingProps, 'styles' | 'className'>;


export interface IBillingStyles {
  root: IStyle;
}