import { classNamesFunction} from 'office-ui-fabric-react';
import { IPageTemplateStyleProps, IPageTemplateStyles } from './PageTemplate.types';


export const getStyles = (props: IPageTemplateStyleProps): IPageTemplateStyles => {
  return {
    root: {
      padding: '32px'
    }
  }
}

export const getClassNames = classNamesFunction<IPageTemplateStyleProps, IPageTemplateStyles>();
