import { styled } from 'office-ui-fabric-react';
import { IReportsPageProps, IReportsPageStyleProps, IReportsPageStyles } from './ReportsPage.types';
import { getStyles } from './ReportsPage.styles';
import { ReportsPageBase } from './ReportsPage.base'

export const ReportsPage = styled<IReportsPageProps, IReportsPageStyleProps, IReportsPageStyles>(ReportsPageBase, getStyles)