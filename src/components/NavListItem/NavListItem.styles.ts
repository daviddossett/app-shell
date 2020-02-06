import { classNamesFunction, getTheme } from 'office-ui-fabric-react';
import { INavListItemStyleProps, INavListItemStyles } from './NavListItem.types';


export const getStyles = (props: INavListItemStyleProps): INavListItemStyles => {

  const theme = getTheme();
  
  return {
    root: {}
  }
}

export const getClassNames = classNamesFunction<INavListItemStyleProps, INavListItemStyles>();
