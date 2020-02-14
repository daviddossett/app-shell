import { classNamesFunction, getTheme, AnimationStyles } from 'office-ui-fabric-react';
import { ICardStyleProps, ICardStyles } from './Card.types';

export const getStyles = (props: ICardStyleProps): ICardStyles => {
  const theme = getTheme();
  
  return {
    root: {
      display: 'flex',
      alignItems: 'center',
      padding: '16px',
      marginBottom: '24px',
      boxShadow: '0 1.6px 3.6px 0 rgba(0,0,0,.132), 0 0.3px 0.9px 0 rgba(0,0,0,.108)',
      borderRadius: '2px',
      backgroundColor: theme.palette.white,
      height: '400px',
      ...AnimationStyles.slideUpIn10
    },
    contentArea: {
      backgroundColor: 'rgba(252, 37, 118, 0.12)',
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    contentAreaText: {
      textAlign: 'center',
      color: '#FC2576' // Todo: Make this a constant for reuse
    }
  }
}

export const getClassNames = classNamesFunction<ICardStyleProps, ICardStyles>();