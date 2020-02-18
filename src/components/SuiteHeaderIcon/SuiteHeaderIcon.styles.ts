import { classNamesFunction, getTheme } from 'office-ui-fabric-react';
import { ISuiteHeaderIconStyleProps, ISuiteHeaderIconStyles } from './SuiteHeaderIcon.types';
import { suiteHeaderPalette } from '../../constants/theme';


export const getStyles = (props: ISuiteHeaderIconStyleProps): ISuiteHeaderIconStyles => {
  const { isDark } = props;
  const theme = getTheme();
  
  return {
    root: [
      'header-icon',

      {
        height: '48px',
        width: '48px',
        borderRadius: 0,
        color: theme.palette.white,
        selectors: {
          ':hover': {
            backgroundColor: suiteHeaderPalette.hover,
            color: theme.palette.white
          },
          ':active': {
            backgroundColor: suiteHeaderPalette.pressed,
            color: theme.palette.white
          }
        }
      },

      isDark && [
        'is-dark',
        {
          color: theme.semanticColors.bodyText
        }
      ]
    ]
  }  
}

export const getClassNames = classNamesFunction<ISuiteHeaderIconStyleProps, ISuiteHeaderIconStyles>();
