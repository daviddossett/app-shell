import { classNamesFunction, getTheme, FontSizes, FontWeights } from 'office-ui-fabric-react';
import { IPageHeaderStyleProps, IPageHeaderStyles } from './PageHeader.types';


export const getStyles = (props: IPageHeaderStyleProps): IPageHeaderStyles => {

  const theme = getTheme();
  
  return {
    text: {
      color: theme.semanticColors.bodyText,
      fontSize: FontSizes.xLarge,
      fontWeight: FontWeights.semibold,
      width: '100%',
      margin: '0',
      padding: '32px'
    }
  }
}

export const getClassNames = classNamesFunction<IPageHeaderStyleProps, IPageHeaderStyles>();
