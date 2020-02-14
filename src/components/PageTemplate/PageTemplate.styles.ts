import { classNamesFunction, getTheme } from 'office-ui-fabric-react';
import { IPageTemplateStyleProps, IPageTemplateStyles } from './PageTemplate.types';


export const getStyles = (props: IPageTemplateStyleProps): IPageTemplateStyles => {
  const theme = getTheme();

  return {
    root: {},
    commandBar: {
      borderBottom: `1px solid ${theme.palette.neutralLight}`
    },
    commandBarHidden: {
      display: 'none'
    },
    contentArea: {
      padding: '0 32px 128px'
    }
  }
}

export const getClassNames = classNamesFunction<IPageTemplateStyleProps, IPageTemplateStyles>();
