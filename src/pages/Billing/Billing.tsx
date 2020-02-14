import { styled } from 'office-ui-fabric-react';
import { IBillingProps, IBillingStyleProps, IBillingStyles } from './Billing.types';
import { getStyles } from './Billing.styles';
import { BillingBase } from './Billing.base'

export const Billing = styled<IBillingProps, IBillingStyleProps, IBillingStyles>(BillingBase, getStyles)