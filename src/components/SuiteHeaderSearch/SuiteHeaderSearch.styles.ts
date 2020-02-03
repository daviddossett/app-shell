import { classNamesFunction } from 'office-ui-fabric-react';
import { ISuiteHeaderSearchStyleProps, ISuiteHeaderSearchStyles } from './SuiteHeaderSearch.types';


export const getStyles = (props: ISuiteHeaderSearchStyleProps): ISuiteHeaderSearchStyles => {
  return {
    root: {
      alignSelf: 'center',
      backgroundColor: 'rgba(255,255,255,0.15)',
      border: 'none',
      color: '#FFFFFF',
      selectors: {
        '::after': {
          border: 'none',
        },
        ':hover': {
          backgroundColor: 'rgba(255,255,255,0.2)'
        }
      }
    },
    iconContainer: {
      color: '#FFFFFF',
    },
    icon: {
      color: '#FFFFFF'
    },
    field: {
      color: '#FFFFFF',
      selectors: {
        '::placeholder': {
          color: '#FFFFFF'
        }
      }
    },
    clearButton: {}
  }
}

export const getClassNames = classNamesFunction<ISuiteHeaderSearchStyleProps, ISuiteHeaderSearchStyles>();