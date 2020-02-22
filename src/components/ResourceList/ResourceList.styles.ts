import { classNamesFunction, AnimationStyles } from 'office-ui-fabric-react';
import { IResourceListStyleProps, IResourceListStyles } from './ResourceList.types';

export const getStyles = (props: IResourceListStyleProps): IResourceListStyles => {
  return {
    root: {
      ...AnimationStyles.slideUpIn10,
      borderRadius: '4px',
      boxShadow: '0px 2px 4px #d9d9d9'
    },
    fileIconHeaderIcon: {
      padding: 0,
      fontSize: '16px'
    },
    fileIconCell: {
      textAlign: 'center',
      selectors: {
        '&:before': {
          content: '.',
          display: 'inline-block',
          verticalAlign: 'middle',
          height: '100%',
          width: '0px',
          visibility: 'hidden'
        }
      }
    },
    fileIconImg: {
      verticalAlign: 'middle',
      maxHeight: '16px',
      maxWidth: '16px'
    }
  }
}

export const getClassNames = classNamesFunction<IResourceListStyleProps, IResourceListStyles>();
