import { classNamesFunction, getTheme, FontSizes, FontWeights } from 'office-ui-fabric-react';
import { IQueriesStyleProps, IQueriesStyles } from './Queries.types';


export const getStyles = (props: IQueriesStyleProps): IQueriesStyles => {

  const theme = getTheme();

  return {
    root: {
      height: '100%',
      width: '100%'
    },
    header: {
      fontSize: FontSizes.xLarge,
      color: theme.semanticColors.bodyText,
      fontWeight: FontWeights.semibold,
      margin: '0'
    }
  }
}

export const getClassNames = classNamesFunction<IQueriesStyleProps, IQueriesStyles>();