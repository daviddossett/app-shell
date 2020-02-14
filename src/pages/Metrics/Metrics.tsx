import { styled } from 'office-ui-fabric-react';
import { IMetricsProps, IMetricsStyleProps, IMetricsStyles } from './Metrics.types';
import { getStyles } from './Metrics.styles';
import { MetricsBase } from './Metrics.base'

export const Metrics = styled<IMetricsProps, IMetricsStyleProps, IMetricsStyles>(MetricsBase, getStyles)