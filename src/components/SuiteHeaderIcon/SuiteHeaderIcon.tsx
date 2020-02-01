import { styled } from 'office-ui-fabric-react';
import { ISuiteHeaderIconProps, ISuiteHeaderIconStyleProps, ISuiteHeaderIconStyles } from './SuiteHeaderIcon.types';
import { getStyles } from './SuiteHeaderIcon.styles';
import { SuiteHeaderIconBase } from './SuiteHeaderIcon.base'

export const SuiteHeaderIcon = styled<ISuiteHeaderIconProps, ISuiteHeaderIconStyleProps, ISuiteHeaderIconStyles>(SuiteHeaderIconBase, getStyles)