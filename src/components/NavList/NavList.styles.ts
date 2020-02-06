import { classNamesFunction, getTheme } from 'office-ui-fabric-react';
import { INavListStyleProps, INavListStyles } from './NavList.types';


export const getStyles = (props: INavListStyleProps): INavListStyles => {

  const theme = getTheme();
  
  return {
    root: {}
  }
}

export const getClassNames = classNamesFunction<INavListStyleProps, INavListStyles>();
