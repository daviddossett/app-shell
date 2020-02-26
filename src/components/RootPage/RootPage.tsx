import { styled } from 'office-ui-fabric-react';
import { IPageProps, IPageStyleProps, IPageStyles } from './RootPage.types';
import { RootPageBase } from './RootPage.base';
import { styles } from './RootPage.styles';

export const RootPage = styled<IPageProps, IPageStyleProps, IPageStyles>(
  RootPageBase,
  styles
)