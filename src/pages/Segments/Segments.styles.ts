import { classNamesFunction } from 'office-ui-fabric-react';
import { ISegmentsStyleProps, ISegmentsStyles } from './Segments.types';


export const getStyles = (props: ISegmentsStyleProps): ISegmentsStyles => {
  return {
    root: {}
  }
}

export const getClassNames = classNamesFunction<ISegmentsStyleProps, ISegmentsStyles>();