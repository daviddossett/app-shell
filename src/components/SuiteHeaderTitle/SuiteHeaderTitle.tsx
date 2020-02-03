import { styled } from 'office-ui-fabric-react';
import { ISuiteHeaderTitleProps, ISuiteHeaderTitleStyleProps, ISuiteHeaderTitleStyles } from './SuiteHeaderTitle.types';
import { getStyles } from './SuiteHeaderTitle.styles';
import { SuiteHeaderTitleBase } from './SuiteHeaderTitle.base'

export const SuiteHeaderTitle = styled<ISuiteHeaderTitleProps, ISuiteHeaderTitleStyleProps, ISuiteHeaderTitleStyles>(SuiteHeaderTitleBase, getStyles)