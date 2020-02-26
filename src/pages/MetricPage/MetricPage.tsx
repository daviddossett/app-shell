import { styled } from 'office-ui-fabric-react';
import { IMetricPageProps, IMetricPageStyleProps, IMetricPageStyles } from './MetricPage.types';
import { getStyles } from './MetricPage.styles';
import { MetricPageBase } from './MetricPage.base'

export const MetricPage = styled<IMetricPageProps, IMetricPageStyleProps, IMetricPageStyles>(MetricPageBase, getStyles)