import { classNamesFunction } from 'office-ui-fabric-react';
import { IReportsPageStyleProps, IReportsPageStyles } from './ReportsPage.types';


export const getStyles = (props: IReportsPageStyleProps): IReportsPageStyles => {
  return {
    root: {}
  }
}

export const getClassNames = classNamesFunction<IReportsPageStyleProps, IReportsPageStyles>();