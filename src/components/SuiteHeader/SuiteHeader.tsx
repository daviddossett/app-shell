import { styled } from 'office-ui-fabric-react';
import { ISuiteHeaderProps, ISuiteHeaderStyleProps, ISuiteHeaderStyles } from './SuiteHeader.types';
import { getStyles } from './SuiteHeader.styles';
import { SuiteHeaderBase } from './SuiteHeader.base'

export const SuiteHeader = styled<ISuiteHeaderProps, ISuiteHeaderStyleProps, ISuiteHeaderStyles>(SuiteHeaderBase, getStyles)