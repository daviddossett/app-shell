import { classNamesFunction, getTheme, FontSizes, FontWeights } from 'office-ui-fabric-react';
import { IReportsStyleProps, IReportsStyles } from './Reports.types';
import { AnimationStyles } from 'office-ui-fabric-react';


export const getStyles = (props: IReportsStyleProps): IReportsStyles => {

  const theme = getTheme();

  return {
    root: {},
    header: {
      fontSize: FontSizes.xLarge,
      color: theme.semanticColors.bodyText,
      fontWeight: FontWeights.semibold,
      margin: '0'
    },
  }
}

export const getClassNames = classNamesFunction<IReportsStyleProps, IReportsStyles>();