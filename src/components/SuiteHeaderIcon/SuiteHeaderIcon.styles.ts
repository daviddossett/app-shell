import { classNamesFunction, getTheme } from 'office-ui-fabric-react';
import { ISuiteHeaderIconStyleProps, ISuiteHeaderIconStyles } from './SuiteHeaderIcon.types';
import { suiteHeaderPalette } from '../../constants/theme';


export const getStyles = (props: ISuiteHeaderIconStyleProps): ISuiteHeaderIconStyles => {
  const theme = getTheme();
  
  return {
    root: {
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
    }
  }  
}

export const getClassNames = classNamesFunction<ISuiteHeaderIconStyleProps, ISuiteHeaderIconStyles>();
