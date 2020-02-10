import { styled } from 'office-ui-fabric-react';
import { ICardProps, ICardStyleProps, ICardStyles } from './Card.types';
import { getStyles } from './Card.styles';
import { CardBase } from './Card.base'

export const Card = styled<ICardProps, ICardStyleProps, ICardStyles>(CardBase, getStyles)