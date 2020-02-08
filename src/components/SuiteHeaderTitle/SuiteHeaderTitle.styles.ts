import { classNamesFunction, getTheme, AnimationStyles } from 'office-ui-fabric-react';
import { ISuiteHeaderTitleStyleProps, ISuiteHeaderTitleStyles } from './SuiteHeaderTitle.types';


export const getStyles = (props: ISuiteHeaderTitleStyleProps): ISuiteHeaderTitleStyles => {

  const theme = getTheme();

  const showFullTitle: any = {
    [`@media (min-width: 640px)`]: {
      display: 'flex',
      alignItems: 'center'
    },
  };

  const hideShortTitle: any = {
    [`@media (min-width: 640px)`]: {
      display: 'none'
    },
  };

  const titleStyles: any = {
      fontSize: '16px',
      fontWeight: '600',
      textOverflow: 'ellipsis',
      lineHeight: '40px',
      color: theme.palette.white,
      alignSelf: 'center',
      padding: '0 8px',
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