import { styled } from 'office-ui-fabric-react';
import { ISuiteHeaderProps, ISuiteHeaderStyleProps, ISuiteHeaderStyles } from './SuiteHeader.types';
import { styles } from './SuiteHeader.styles';
import { SuiteHeaderBase } from './SuiteHeader.base'

export const SuiteHeader = styled<ISuiteHeaderProps, ISuiteHeaderStyleProps, ISuiteHeaderStyles>(SuiteHeaderBase, styles)