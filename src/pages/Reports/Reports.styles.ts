import { classNamesFunction, getTheme } from 'office-ui-fabric-react';
import { IReportsStyleProps, IReportsStyles } from './Reports.types';


export const getStyles = (props: IReportsStyleProps): IReportsStyles => {

  const theme = getTheme();

  return {
    root: {}
  }
}

export const getClassNames = classNamesFunction<IReportsStyleProps, IReportsStyles>();