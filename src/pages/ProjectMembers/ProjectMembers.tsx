import { styled } from 'office-ui-fabric-react';
import { IProjectMembersProps, IProjectMembersStyleProps, IProjectMembersStyles } from './ProjectMembers.types';
import { getStyles } from './ProjectMembers.styles';
import { ProjectMembersBase } from './ProjectMembers.base'

export const ProjectMembers = styled<IProjectMembersProps, IProjectMembersStyleProps, IProjectMembersStyles>(ProjectMembersBase, getStyles)