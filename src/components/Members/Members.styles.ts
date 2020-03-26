import { classNamesFunction } from 'office-ui-fabric-react';
import { IMembersStyleProps, IMembersStyles } from './Members.types';

export const getStyles = (props: IMembersStyleProps): IMembersStyles => {

  return {
    root: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gridAutoRows: '200px',
      gridRowGap: '16px',
      gridColumnGap: '16px',
    }
  }
}

export const getClassNames = classNamesFunction<IMembersStyleProps, IMembersStyles>();
