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
    header: {
      fontSize: FontSizes.xLarge,
      color: theme.semanticColors.bodyText,
      fontWeight: FontWeights.semibold,
      margin: '0'
    },
    fakeCard: {
      margin: '24px 0',
      width: 'inherit',
      height: '400px',
      background: theme.palette.white,
      boxShadow: 'rgba(0, 0, 0, 0.133) 0px 1.6px 3.6px 0px, rgba(0, 0, 0, 0.11) 0px 0.3px 0.9px 0px;',
      borderRadius: '4px',
      ...AnimationStyles.slideUpIn10
    },
    fakeContentArea: {
      height: 'inherit',
      width: 'inherit',
      // background: 'rgba(252, 37, 118, 0.12);',
      color: '#FC2576',
      fontSize: '14px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '4px',
    }
  }
}

export const getClassNames = classNamesFunction<IHomeStyleProps, IHomeStyles>();