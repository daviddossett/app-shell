import { styled } from 'office-ui-fabric-react';
import { IAvatarProps, IAvatarStyleProps, IAvatarStyles } from './Avatar.types';
import { getStyles } from './Avatar.styles';
import { AvatarBase } from './Avatar.base'

export const Avatar = styled<IAvatarProps, IAvatarStyleProps, IAvatarStyles>(AvatarBase, getStyles)