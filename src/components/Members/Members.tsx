import { styled } from 'office-ui-fabric-react';
import { IMembersProps, IMembersStyleProps, IMembersStyles } from './Members.types';
import { getStyles } from './Members.styles';
import { MembersBase } from './Members.base'

export const Members = styled<IMembersProps, IMembersStyleProps, IMembersStyles>(MembersBase, getStyles)
