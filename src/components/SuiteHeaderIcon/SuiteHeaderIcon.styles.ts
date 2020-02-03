import { classNamesFunction } from 'office-ui-fabric-react';
import { ISuiteHeaderIconStyleProps, ISuiteHeaderIconStyles } from './SuiteHeaderIcon.types';


export const getStyles = (props: ISuiteHeaderIconStyleProps): ISuiteHeaderIconStyles => {
  return {
    root: {
      height: '48px',
      width: '48px',
      borderRadius: 0,
      color: '#FFFFFF',
      selectors: {
        ':hover': {
          backgroundColor: '#03245C',
          color: '#FFFFFF'
        },
        ':active': {
          backgroundColor: '#053385',
          color: '#FFFFFF'
        },
      }
    },
  }
}

export const getClassNames = classNamesFunction<ISuiteHeaderIconStyleProps, ISuiteHeaderIconStyles>();
