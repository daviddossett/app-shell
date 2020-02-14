import { classNamesFunction } from 'office-ui-fabric-react';
import { IBillingStyleProps, IBillingStyles } from './Billing.types';


export const getStyles = (props: IBillingStyleProps): IBillingStyles => {
  return {
    root: {
      padding: '32px'
    }
  }
}

export const getClassNames = classNamesFunction<IBillingStyleProps, IBillingStyles>();