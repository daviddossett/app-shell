import { styled } from 'office-ui-fabric-react';
import { ISegmentsProps, ISegmentsStyleProps, ISegmentsStyles } from './Segments.types';
import { getStyles } from './Segments.styles';
import { SegmentsBase } from './Segments.base'

export const Segments = styled<ISegmentsProps, ISegmentsStyleProps, ISegmentsStyles>(SegmentsBase, getStyles)