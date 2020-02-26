import { classNamesFunction } from 'office-ui-fabric-react';
import { ISourcePageStyleProps, ISourcePageStyles } from './SourcePage.types';


export const getStyles = (props: ISourcePageStyleProps): ISourcePageStyles => {
  return {
    root: {}
  }
}

export const getClassNames = classNamesFunction<ISourcePageStyleProps, ISourcePageStyles>();