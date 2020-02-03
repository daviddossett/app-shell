import { classNamesFunction } from 'office-ui-fabric-react';
import { IAvatarStyleProps, IAvatarStyles } from './Avatar.types';


export const getStyles = (props: IAvatarStyleProps): IAvatarStyles => {
  return {
    root: {
      height: '48px',
      width: '48px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    avatar: {
      width: '28px'
    }
  }
}

export const getClassNames = classNamesFunction<IAvatarStyleProps, IAvatarStyles>();
