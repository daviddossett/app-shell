import { classNamesFunction } from 'office-ui-fabric-react';
import { ISuiteHeaderIconStyleProps, ISuiteHeaderIconStyles } from './SuiteHeaderIcon.types';


export const getStyles = (props: ISuiteHeaderIconStyleProps): ISuiteHeaderIconStyles => {
  return {
    root: {
      height: '48px',
      width: '48px'
    },
  }
}

export const getClassNames = classNamesFunction<ISuiteHeaderIconStyleProps, ISuiteHeaderIconStyles>();
