import { classNamesFunction, getTheme, FontSizes, FontWeights } from 'office-ui-fabric-react';
import { IPageHeaderStyleProps, IPageHeaderStyles } from './PageHeader.types';
import { breakpoint } from '../../constants/breakpoints';

const mdPadding: any = {
  [`@media (min-width: ${breakpoint.md})`]: {
    padding: '24px'
  },
};

const lgPadding: any = {
  [`@media (min-width: ${breakpoint.lg})`]: {
    padding: '32px'
  },
};

export const getStyles = (props: IPageHeaderStyleProps): IPageHeaderStyles => {
  const theme = getTheme();
  
  return {    
    root: {
      width: '100%',
      margin: '0',
      padding: '24px 16px',
      selectors: {
        ...mdPadding,
        ...lgPadding
      }
    },
    title: {
      color: theme.semanticColors.bodyText,
      fontSize: FontSizes.xLarge,
      fontWeight: FontWeights.semibold,
    }
  }
}

export const getClassNames = classNamesFunction<IPageHeaderStyleProps, IPageHeaderStyles>();
