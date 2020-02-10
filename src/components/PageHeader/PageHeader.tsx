import { styled } from 'office-ui-fabric-react';
import { IPageHeaderProps, IPageHeaderStyleProps, IPageHeaderStyles } from './PageHeader.types';
import { getStyles } from './PageHeader.styles';
import { PageHeaderBase } from './PageHeader.base'

export const PageHeader = styled<IPageHeaderProps, IPageHeaderStyleProps, IPageHeaderStyles>(PageHeaderBase, getStyles)