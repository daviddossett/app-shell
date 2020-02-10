import { classNamesFunction, getTheme } from 'office-ui-fabric-react';
import { ISuiteHeaderTitleStyleProps, ISuiteHeaderTitleStyles } from './SuiteHeaderTitle.types';
import { breakpoint } from '../../constants/breakpoints';


export const getStyles = (props: ISuiteHeaderTitleStyleProps): ISuiteHeaderTitleStyles => {

  const theme = getTheme();

  const showFullTitle: any = {
    [`@media (min-width: ${breakpoint.lg})`]: {
      display: 'flex',
      alignItems: 'center'
    },
  };

  
  const hideShortTitle: any = {
    [`@media (min-width: ${breakpoint.lg})`]: {
      display: 'none'
    },
  };

  const showShortTitle: any = {
    [`@media (min-width: 375px)`]: {
      display: 'flex'
    },
  };

  const titleStyles: any = {
      display: 'none',
      fontSize: '16px',
      fontWeight: '600',
      textOverflow: 'ellipsis',
      lineHeight: '40px',
      color: theme.palette.white,
      alignSelf: 'center',
      padding: '0 8px',
      marginRight: '8px',
      textDecoration: 'none',
      border: 'none',
      whiteSpace: 'nowrap',
      selectors: {
        ':hover, :focus, :active': {
          textDecoration: 'none',
          color: '#FFFFFF'
        },
      }
    }

  return {
    root: {
      alignSelf: 'center'
    },
    short: {
      ...titleStyles,
      selectors: {
        ...showShortTitle,
        ...hideShortTitle
      }
    },
    long: {
      display: 'none',
      ...titleStyles,
      selectors: {
        ...showFullTitle
      }
    }
  }
}

export const getClassNames = classNamesFunction<ISuiteHeaderTitleStyleProps, ISuiteHeaderTitleStyles>();