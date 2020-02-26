import { styled } from 'office-ui-fabric-react';
import { ISegmentPageProps, ISegmentPageStyleProps, ISegmentPageStyles } from './SegmentPage.types';
import { getStyles } from './SegmentPage.styles';
import { SegmentPageBase } from './SegmentPage.base'

export const SegmentPage = styled<ISegmentPageProps, ISegmentPageStyleProps, ISegmentPageStyles>(SegmentPageBase, getStyles)