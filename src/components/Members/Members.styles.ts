import { classNamesFunction } from 'office-ui-fabric-react';
import { IMembersStyleProps, IMembersStyles } from './Members.types';

export const getStyles = (props: IMembersStyleProps): IMembersStyles => {

  return {
    root: {
      display: 'grid',
      gridAutoRows: '200px',
    }
  }
}

export const getClassNames = classNamesFunction<IMembersStyleProps, IMembersStyles>();
