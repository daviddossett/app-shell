import { styled } from 'office-ui-fabric-react';
import { IBasicSettingsProps, IBasicSettingsStyleProps, IBasicSettingsStyles } from './BasicSettings.types';
import { getStyles } from './BasicSettings.styles';
import { BasicSettingsBase } from './BasicSettings.base'

export const BasicSettings = styled<IBasicSettingsProps, IBasicSettingsStyleProps, IBasicSettingsStyles>(BasicSettingsBase, getStyles)