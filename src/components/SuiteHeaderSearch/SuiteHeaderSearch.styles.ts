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
        }
      }
    }
  }
}

export const getClassNames = classNamesFunction<ISuiteHeaderSearchStyleProps, ISuiteHeaderSearchStyles>();