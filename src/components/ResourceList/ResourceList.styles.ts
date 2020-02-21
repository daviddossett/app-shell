import { classNamesFunction, getTheme } from 'office-ui-fabric-react';
import { IResourceListStyleProps, IResourceListStyles } from './ResourceList.types';

export const getStyles = (props: IResourceListStyleProps): IResourceListStyles => {
  const theme = getTheme();
  
  return {
    root: {}
  }
}

export const getClassNames = classNamesFunction<IResourceListStyleProps, IResourceListStyles>();
