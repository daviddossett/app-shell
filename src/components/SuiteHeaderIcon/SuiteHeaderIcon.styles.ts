import { classNamesFunction } from 'office-ui-fabric-react';
import { ISuiteHeaderIconStyleProps, ISuiteHeaderIconStyles } from './SuiteHeaderIcon.types';


export const getStyles = (props: ISuiteHeaderIconStyleProps): ISuiteHeaderIconStyles => {
  return {
    root: {
      backgroundColor: '#001433',
      height: '48px',
      width: '100%'
    },
  }
}

export const getClassNames = classNamesFunction<ISuiteHeaderIconStyleProps, ISuiteHeaderIconStyles>();
