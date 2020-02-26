import { styled } from 'office-ui-fabric-react';
import { ISourcePageProps, ISourcePageStyleProps, ISourcePageStyles } from './SourcePage.types';
import { getStyles } from './SourcePage.styles';
import { SourcePageBase } from './SourcePage.base'

export const SourcePage = styled<ISourcePageProps, ISourcePageStyleProps, ISourcePageStyles>(SourcePageBase, getStyles)