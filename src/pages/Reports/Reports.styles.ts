import { IReportsStyleProps, IReportsStyles } from './Reports.types';
import { classNamesFunction } from 'office-ui-fabric-react';

export const getStyles = (props: IReportsStyleProps): IReportsStyles => {
  return {
    root: {}
  }
}

export const getClassNames = classNamesFunction<IReportsStyleProps, IReportsStyles>();