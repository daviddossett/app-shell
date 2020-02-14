import { classNamesFunction } from 'office-ui-fabric-react';
import { IProjectMembersStyleProps, IProjectMembersStyles } from './ProjectMembers.types';


export const getStyles = (props: IProjectMembersStyleProps): IProjectMembersStyles => {
  return {
    root: {}
  }
}

export const getClassNames = classNamesFunction<IProjectMembersStyleProps, IProjectMembersStyles>();