import { classNamesFunction } from 'office-ui-fabric-react';
import { IMetricsStyleProps, IMetricsStyles } from './Metrics.types';


export const getStyles = (props: IMetricsStyleProps): IMetricsStyles => {
  return {
    root: {}
  }
}

export const getClassNames = classNamesFunction<IMetricsStyleProps, IMetricsStyles>();