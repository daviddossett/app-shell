import { classNamesFunction, getTheme, FontSizes, FontWeights } from 'office-ui-fabric-react';
import { IDataStyleProps, IDataStyles } from './Data.types';



export const getStyles = (props: IDataStyleProps): IDataStyles => {

  const theme = getTheme();

  return {
    root: {
      padding: '32px'
    },
    header: {
      fontSize: FontSizes.xLarge,
      color: theme.semanticColors.bodyText,
      fontWeight: FontWeights.semibold,
      margin: '0'
    },
  }
}

export const getClassNames = classNamesFunction<IDataStyleProps, IDataStyles>();