import { styled } from 'office-ui-fabric-react';
import { ISettingsProps, ISettingsStyleProps, ISettingsStyles } from './Settings.types';
import { getStyles } from './Settings.styles';
import { SettingsBase } from './Settings.base'

export const Settings = styled<ISettingsProps, ISettingsStyleProps, ISettingsStyles>(SettingsBase, getStyles)