import { classNamesFunction } from 'office-ui-fabric-react';
import { ISegmentPageStyleProps, ISegmentPageStyles } from './SegmentPage.types';


export const getStyles = (props: ISegmentPageStyleProps): ISegmentPageStyles => {
  return {
    root: {}
  }
}

export const getClassNames = classNamesFunction<ISegmentPageStyleProps, ISegmentPageStyles>();