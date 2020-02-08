import { classNamesFunction } from 'office-ui-fabric-react';
import { ISuiteHeaderActionsStyleProps, ISuiteHeaderActionsStyles } from './SuiteHeaderActions.types';


export const getStyles = (props: ISuiteHeaderActionsStyleProps): ISuiteHeaderActionsStyles => {

  const showFullMenu: any = {
    [`@media (min-width: 900px)`]: {
      display: 'flex',
      alignItems: 'center'
    },
  };

  const hideSmallMenu: any = {
    [`@media (min-width: 900px)`]: {
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