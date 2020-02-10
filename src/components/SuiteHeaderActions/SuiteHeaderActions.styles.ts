import { classNamesFunction } from 'office-ui-fabric-react';
import { ISuiteHeaderActionsStyleProps, ISuiteHeaderActionsStyles } from './SuiteHeaderActions.types';
import { breakpoint } from '../../constants/breakpoints';


export const getStyles = (props: ISuiteHeaderActionsStyleProps): ISuiteHeaderActionsStyles => {

  const showFullMenu: any = {
    [`@media (min-width: ${breakpoint.md})`]: {
      display: 'flex',
      alignItems: 'center'
    },
  };

  const hideSmallMenu: any = {
    [`@media (min-width: ${breakpoint.md})`]: {
      display: 'none'
    },
  };
  
  return {
    root: {
      display: 'flex',
      alignItems: 'center'
    },
    smallMenu: {
      display: 'flex',
      selectors: {
        ...hideSmallMenu
      }
    },
    fullMenu: {
      display: 'none',
      selectors: {
        ...showFullMenu
      }
    }
  }
}

export const getClassNames = classNamesFunction<ISuiteHeaderActionsStyleProps, ISuiteHeaderActionsStyles>();