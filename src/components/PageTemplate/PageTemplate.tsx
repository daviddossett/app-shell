import { styled } from 'office-ui-fabric-react';
import { IPageTemplateProps, IPageTemplateStyleProps, IPageTemplateStyles } from './PageTemplate.types';
import { getStyles } from './PageTemplate.styles';
import { PageTemplateBase } from './PageTemplate.base'

export const PageTemplate = styled<IPageTemplateProps, IPageTemplateStyleProps, IPageTemplateStyles>(PageTemplateBase, getStyles)