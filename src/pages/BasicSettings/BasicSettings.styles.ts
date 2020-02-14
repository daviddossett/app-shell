import { classNamesFunction } from 'office-ui-fabric-react';
import { IBasicSettingsStyleProps, IBasicSettingsStyles } from './BasicSettings.types';


export const getStyles = (props: IBasicSettingsStyleProps): IBasicSettingsStyles => {
  return {
    root: {}
  }
}

export const getClassNames = classNamesFunction<IBasicSettingsStyleProps, IBasicSettingsStyles>();