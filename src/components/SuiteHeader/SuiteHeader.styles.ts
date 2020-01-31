import { classNamesFunction } from 'office-ui-fabric-react';
import { ISuiteHeaderStyleProps, ISuiteHeaderStyles } from './SuiteHeader.types';


export const getStyles = (props: ISuiteHeaderStyleProps): ISuiteHeaderStyles => {
  return {
    root: {
      backgroundColor: '#001433',
      height: '48px',
      width: '100%'
    },
  }
}

export const getClassNames = classNamesFunction<ISuiteHeaderStyleProps, ISuiteHeaderStyles>();
