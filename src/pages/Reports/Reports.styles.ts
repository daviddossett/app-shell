import { classNamesFunction, getTheme } from 'office-ui-fabric-react';
import { IReportsStyleProps, IReportsStyles } from './Reports.types';


export const getStyles = (props: IReportsStyleProps): IReportsStyles => {

  const theme = getTheme();

  return {
    root: {},
    contentArea: {
      padding: '32px',
    },
    commandBar: {
      borderBottom: `1px solid ${theme.palette.neutralLight}`,
    },
    chartGrid: {
      display: 'grid',
      gridRowGap: '24px'
    }
  }
}

export const getClassNames = classNamesFunction<IReportsStyleProps, IReportsStyles>();