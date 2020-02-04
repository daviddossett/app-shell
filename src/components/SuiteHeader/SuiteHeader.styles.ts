import { classNamesFunction } from 'office-ui-fabric-react';
import { ISuiteHeaderStyleProps, ISuiteHeaderStyles } from './SuiteHeader.types';

export const getStyles = (props: ISuiteHeaderStyleProps): ISuiteHeaderStyles => {

  const suiteHeaderHeight = '48px'
  const suiteHeaderColor = '#001433'

  return {
    root: {
      backgroundColor: suiteHeaderColor,
      height: suiteHeaderHeight,
      width: '100%',
      display: 'flex',
      flexWrap: 'nowrap',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    waffleWithTitle: {
      display: 'inline-flex'
    },
    search: {},
    actions: {}
  }
}

export const getClassNames = classNamesFunction<ISuiteHeaderStyleProps, ISuiteHeaderStyles>();
