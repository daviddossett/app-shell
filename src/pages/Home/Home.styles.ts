import { classNamesFunction, getTheme, FontSizes, FontWeights } from 'office-ui-fabric-react';
import { IHomeStyleProps, IHomeStyles } from './Home.types';
import { AnimationStyles } from 'office-ui-fabric-react';


export const getStyles = (props: IHomeStyleProps): IHomeStyles => {

  const theme = getTheme();

  return {
    root: {
      height: '100%',
      width: '100%'
    }
  }
}

export const getClassNames = classNamesFunction<IHomeStyleProps, IHomeStyles>();