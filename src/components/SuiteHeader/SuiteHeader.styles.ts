import { classNamesFunction } from 'office-ui-fabric-react';
import { ISuiteHeaderStyleProps, ISuiteHeaderStyles } from './SuiteHeader.types';
import { suiteHeaderPalette } from '../../constants/theme';

export const getStyles = (props: ISuiteHeaderStyleProps): ISuiteHeaderStyles => {
  
  const suiteHeaderHeight = '48px'

  return {
    root: {
      backgroundColor: suiteHeaderPalette.primary,
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
