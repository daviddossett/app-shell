import { styled } from 'office-ui-fabric-react';
import { ISourcesProps, ISourcesStyleProps, ISourcesStyles } from './Sources.types';
import { getStyles } from './Sources.styles';
import { SourcesBase } from './Sources.base'

export const Sources = styled<ISourcesProps, ISourcesStyleProps, ISourcesStyles>(SourcesBase, getStyles)