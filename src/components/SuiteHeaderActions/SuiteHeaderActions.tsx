import { styled } from 'office-ui-fabric-react';
import { ISuiteHeaderActionsProps, ISuiteHeaderActionsStyleProps, ISuiteHeaderActionsStyles } from './SuiteHeaderActions.types';
import { getStyles } from './SuiteHeaderActions.styles';
import { SuiteHeaderActionsBase } from './SuiteHeaderActions.base'

export const SuiteHeaderActions = styled<ISuiteHeaderActionsProps, ISuiteHeaderActionsStyleProps, ISuiteHeaderActionsStyles>(SuiteHeaderActionsBase, getStyles)