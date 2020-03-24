import { styled } from 'office-ui-fabric-react';
import { IMembersProps, IMembersStyleProps, IMembersStyles } from './MemberCard.types';
import { getStyles } from './MemberCard.styles';
import { MembersBase } from './MemberCard.base'

export const Members = styled<IMembersProps, IMembersStyleProps, IMembersStyles>(MembersBase, getStyles)
