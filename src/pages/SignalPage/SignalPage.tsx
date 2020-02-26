import { styled } from 'office-ui-fabric-react';
import { ISignalPageProps, ISignalPageStyleProps, ISignalPageStyles } from './SignalPage.types';
import { getStyles } from './SignalPage.styles';
import { SignalPageBase } from './SignalPage.base'

export const SignalPage = styled<ISignalPageProps, ISignalPageStyleProps, ISignalPageStyles>(SignalPageBase, getStyles)