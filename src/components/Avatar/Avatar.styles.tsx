import { classNamesFunction } from 'office-ui-fabric-react';
import { IAvatarStyleProps, IAvatarStyles } from './Avatar.types';


export const getStyles = (props: IAvatarStyleProps): IAvatarStyles => {
  return {
    root: {
      height: '48px',
      width: '48px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      selectors: {
        ':hover': {
          backgroundColor: '#03245C',
          cursor: 'pointer'
        },
        ':active': {
          backgroundColor: '#053385',
          cursor: 'pointer'
        }
      }
    },
    avatar: {
      width: '28px',
    }
  }
}

export const getClassNames = classNamesFunction<IAvatarStyleProps, IAvatarStyles>();
