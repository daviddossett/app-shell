import { classNamesFunction, getTheme } from 'office-ui-fabric-react';
import { ISuiteHeaderSearchStyleProps, ISuiteHeaderSearchStyles } from './SuiteHeaderSearch.types';


export const getStyles = (props: ISuiteHeaderSearchStyleProps): ISuiteHeaderSearchStyles => {

  const theme = getTheme();
  const searchBackgroundRest = 'rgba(255,255,255,0.15)';
  const searchBackgroundHover = 'rgba(255,255,255,0.20)';

  const showSearch: any = {
    [`@media (min-width: 900px)`]: {
      display: 'flex',
      alignItems: 'center'
    },
  };

  return {
    root: {
      backgroundColor: searchBackgroundRest,
      border: 'none',
      color: theme.palette.white,
      display: 'none',
      flex: '0 1 40%',
      selectors: {
        '::after': {
          border: 'none',
        },
        ':hover': {
          backgroundColor: searchBackgroundHover
        },
        ...showSearch
      }
    },
    iconContainer: {
      color: theme.palette.white,
    },
    icon: {
      color: theme.palette.white
    },
    field: {
      color: theme.palette.white,
      selectors: {
        '::placeholder': {
          color: theme.palette.white
        }
      }
    },
    clearButton: {
      display: 'none' // Remove once I can restyle the nested icon button 
    }
  }
}

export const getClassNames = classNamesFunction<ISuiteHeaderSearchStyleProps, ISuiteHeaderSearchStyles>();