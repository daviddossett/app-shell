import { styled } from 'office-ui-fabric-react';
import { IReportPageProps, IReportPageStyleProps, IReportPageStyles } from './ReportPage.types';
import { getStyles } from './ReportPage.styles';
import { ReportPageBase } from './ReportPage.base'

export const ReportPage = styled<IReportPageProps, IReportPageStyleProps, IReportPageStyles>(ReportPageBase, getStyles)