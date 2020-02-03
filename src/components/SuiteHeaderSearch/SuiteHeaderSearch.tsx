import { styled } from 'office-ui-fabric-react';
import { ISuiteHeaderSearchProps, ISuiteHeaderSearchStyleProps, ISuiteHeaderSearchStyles } from './SuiteHeaderSearch.types';
import { getStyles } from './SuiteHeaderSearch.styles';
import { SuiteHeaderSearchBase } from './SuiteHeaderSearch.base'

export const SuiteHeaderSearch = styled<ISuiteHeaderSearchProps, ISuiteHeaderSearchStyleProps, ISuiteHeaderSearchStyles>(SuiteHeaderSearchBase, getStyles)