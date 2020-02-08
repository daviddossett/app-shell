import { classNamesFunction } from 'office-ui-fabric-react';
import { ISuiteHeaderActionsStyleProps, ISuiteHeaderActionsStyles } from './SuiteHeaderActions.types';


export const getStyles = (props: ISuiteHeaderActionsStyleProps): ISuiteHeaderActionsStyles => {

  const hideIcons = {
    [`@media (max-width: 640px)`]: {
      // display: 'none'
    },
  };

  return {
    root: {
      display: 'flex',
      alignItems: 'center'
    }
  }
}

export const getClassNames = classNamesFunction<ISuiteHeaderActionsStyleProps, ISuiteHeaderActionsStyles>();