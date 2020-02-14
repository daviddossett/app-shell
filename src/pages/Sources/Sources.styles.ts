import { classNamesFunction } from 'office-ui-fabric-react';
import { ISourcesStyleProps, ISourcesStyles } from './Sources.types';


export const getStyles = (props: ISourcesStyleProps): ISourcesStyles => {
  return {
    root: {}
  }
}

export const getClassNames = classNamesFunction<ISourcesStyleProps, ISourcesStyles>();