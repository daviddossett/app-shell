import { classNamesFunction, getTheme, FontSizes, FontWeights } from 'office-ui-fabric-react';
import { IBasicSettingsStyleProps, IBasicSettingsStyles } from './BasicSettings.types';


export const getStyles = (props: IBasicSettingsStyleProps): IBasicSettingsStyles => {

  const theme = getTheme();

  return {
    root: {
      padding: '32px'
    },
    header: {
      fontSize: FontSizes.xLarge,
      color: theme.semanticColors.bodyText,
      fontWeight: FontWeights.semibold,
      margin: '0'
    },
  }
}

export const getClassNames = classNamesFunction<IBasicSettingsStyleProps, IBasicSettingsStyles>();