import { classNamesFunction, getTheme, FontSizes, FontWeights } from 'office-ui-fabric-react';
import { ISettingsStyleProps, ISettingsStyles } from './Settings.types';


export const getStyles = (props: ISettingsStyleProps): ISettingsStyles => {

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

export const getClassNames = classNamesFunction<ISettingsStyleProps, ISettingsStyles>();