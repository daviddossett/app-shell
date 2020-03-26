import { classNamesFunction, getTheme, AnimationStyles } from 'office-ui-fabric-react';
import { IMemberCardStyleProps, IMemberCardStyles } from './MemberCard.types';

export const getStyles = (props: IMemberCardStyleProps): IMemberCardStyles => {
  const theme = getTheme();

  return {
    root: {
      ...AnimationStyles.slideUpIn10,
      height: '200px',
      padding: '16px',
      boxShadow: '0 1.6px 3.6px 0 rgba(0,0,0,.132), 0 0.3px 0.9px 0 rgba(0,0,0,.108)',
      borderRadius: '2px',
      backgroundColor: theme.palette.white,
    }
  }
}

export const getClassNames = classNamesFunction<IMemberCardStyleProps, IMemberCardStyles>();
