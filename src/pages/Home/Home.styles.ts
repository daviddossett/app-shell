import { classNamesFunction } from 'office-ui-fabric-react';
import { IHomeStyleProps, IHomeStyles } from './Home.types';

export const getStyles = (props: IHomeStyleProps): IHomeStyles => {
  return {
    root: {
      height: '100%',
      width: '100%'
    }
  }
}

export const getClassNames = classNamesFunction<IHomeStyleProps, IHomeStyles>();