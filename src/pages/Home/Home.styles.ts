import { classNamesFunction, getTheme } from 'office-ui-fabric-react';
import { IHomeStyleProps, IHomeStyles } from './Home.types';


export const getStyles = (props: IHomeStyleProps): IHomeStyles => {

  const theme = getTheme();

  return {
    root: {}
  }
}

export const getClassNames = classNamesFunction<IHomeStyleProps, IHomeStyles>();