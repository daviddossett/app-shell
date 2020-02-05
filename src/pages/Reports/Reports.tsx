import { styled } from 'office-ui-fabric-react';
import { IReportsProps, IReportsStyleProps, IReportsStyles } from './Reports.types';
import { getStyles } from './Reports.styles';
import { ReportsBase } from './Reports.base'

export const Reports = styled<IReportsProps, IReportsStyleProps, IReportsStyles>(ReportsBase, getStyles)