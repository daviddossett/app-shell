import { classNamesFunction, getTheme, FontSizes, FontWeights } from 'office-ui-fabric-react';
import { IReportsStyleProps, IReportsStyles } from './Reports.types';


export const getStyles = (props: IReportsStyleProps): IReportsStyles => {

  const theme = getTheme();

  return {
    root: {
      padding: '32px'
    }
  }
}

export const getClassNames = classNamesFunction<IReportsStyleProps, IReportsStyles>();