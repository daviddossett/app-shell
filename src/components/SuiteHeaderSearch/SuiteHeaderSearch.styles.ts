import { classNamesFunction } from 'office-ui-fabric-react';
import { ISuiteHeaderSearchStyleProps, ISuiteHeaderSearchStyles } from './SuiteHeaderSearch.types';


export const getStyles = (props: ISuiteHeaderSearchStyleProps): ISuiteHeaderSearchStyles => {
  const primaryTextColor = '#FFFFFF';
  const searchBackgroundRest = 'rgba(255,255,255,0.15)';
  const searchBackgroundHover = 'rgba(255,255,255,0.20)';


  return {
    root: {
      backgroundColor: searchBackgroundRest,
      border: 'none',
      color: primaryTextColor,
      flex: '0 1 30%',
      selectors: {
        '::after': {
          border: 'none',
        },
        ':hover': {
          backgroundColor: searchBackgroundHover
        }
      }
    },
    iconContainer: {
      color: primaryTextColor,
    },
    icon: {
      color: primaryTextColor
    },
    field: {
      color: primaryTextColor,
      selectors: {
        '::placeholder': {
          color: primaryTextColor
        }
      }
    },
    clearButton: {
      display: 'none' // Remove once I can restyle the nested icon button 
    }
  }
}

export const getClassNames = classNamesFunction<ISuiteHeaderSearchStyleProps, ISuiteHeaderSearchStyles>();