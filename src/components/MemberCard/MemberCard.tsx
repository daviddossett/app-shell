import { styled } from 'office-ui-fabric-react';
import { IMemberCardProps, IMemberCardStyleProps, IMemberCardStyles } from './MemberCard.types';
import { getStyles } from './MemberCard.styles';
import { MemberCardBase } from './MemberCard.base'

export const MemberCard = styled<IMemberCardProps, IMemberCardStyleProps, IMemberCardStyles>(MemberCardBase, getStyles)
