import { styled } from 'office-ui-fabric-react';
import { IPageProps, IPageStyleProps, IPageStyles } from './Page.types';
import { PageBase } from './Page.base';
import { styles } from './Page.styles';

export const Page = styled<IPageProps, IPageStyleProps, IPageStyles>(
  PageBase,
  styles
)