import { classNamesFunction } from 'office-ui-fabric-react';
import { IMembersStyleProps, IMembersStyles } from './Members.types';

export const getStyles = (props: IMembersStyleProps): IMembersStyles => {

  return {
    root: {
      display: 'grid',
      gridAutoRows: '200px',
      gridRowGap: '16px',
      gridColumnGap: '16px',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    }
  }
}

export const getClassNames = classNamesFunction<IMembersStyleProps, IMembersStyles>();
