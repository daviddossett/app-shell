import { classNamesFunction} from 'office-ui-fabric-react';
import { IPageTemplateStyleProps, IPageTemplateStyles } from './PageTemplate.types';


export const getStyles = (props: IPageTemplateStyleProps): IPageTemplateStyles => {
  return {
    root: {},
    commandBar: {},
    contentArea: {
      padding: '32px',
      backgroundColor: 'rgba(252, 37, 118, 0.12)',
      width: '100%',
    }
  }
}

export const getClassNames = classNamesFunction<IPageTemplateStyleProps, IPageTemplateStyles>();
