import { classNamesFunction, getTheme } from 'office-ui-fabric-react';
import { ISettingsStyleProps, ISettingsStyles } from './Settings.types';


export const getStyles = (props: ISettingsStyleProps): ISettingsStyles => {

  const theme = getTheme();

  return {
    root: {}
  }
}

export const getClassNames = classNamesFunction<ISettingsStyleProps, ISettingsStyles>();