import { classNamesFunction } from 'office-ui-fabric-react';
import { IQueriesStyleProps, IQueriesStyles } from './Queries.types';


export const getStyles = (props: IQueriesStyleProps): IQueriesStyles => {
  return {
    root: {}
  }
}

export const getClassNames = classNamesFunction<IQueriesStyleProps, IQueriesStyles>();