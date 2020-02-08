import { classNamesFunction, getTheme, FontSizes, FontWeights } from 'office-ui-fabric-react';
import { IHomeStyleProps, IHomeStyles } from './Home.types';
import { AnimationStyles } from 'office-ui-fabric-react';


export const getStyles = (props: IHomeStyleProps): IHomeStyles => {

  const theme = getTheme();

  return {
    root: {
      height: '100%',
      width: '100%'
    },
    banner: {
      background: 'linear-gradient(128.18deg, rgba(0, 69, 120, 0.25) 0%, rgba(199, 224, 244, 0.25) 100%), linear-gradient(180deg, #00188F 0%, #0078D4 100%)',
      height: '50vh',
      width: '100%'
    },
    card: {
      
    }
  }
}

export const getClassNames = classNamesFunction<IHomeStyleProps, IHomeStyles>();