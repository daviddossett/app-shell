import { classNamesFunction } from 'office-ui-fabric-react';
import { IMetricPageStyleProps, IMetricPageStyles } from './MetricPage.types';


export const getStyles = (props: IMetricPageStyleProps): IMetricPageStyles => {
  return {
    root: {}
  }
}

export const getClassNames = classNamesFunction<IMetricPageStyleProps, IMetricPageStyles>();