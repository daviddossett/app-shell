import { classNamesFunction } from 'office-ui-fabric-react';
import { IReportPageStyleProps, IReportPageStyles } from './ReportPage.types';


export const getStyles = (props: IReportPageStyleProps): IReportPageStyles => {
  return {
    root: {}
  }
}

export const getClassNames = classNamesFunction<IReportPageStyleProps, IReportPageStyles>();