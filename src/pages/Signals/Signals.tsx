import { styled } from 'office-ui-fabric-react';
import { ISignalsProps, ISignalsStyleProps, ISignalsStyles } from './Signals.types';
import { getStyles } from './Signals.styles';
import { SignalsBase } from './Signals.base'

export const Signals = styled<ISignalsProps, ISignalsStyleProps, ISignalsStyles>(SignalsBase, getStyles)