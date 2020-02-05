import { classNamesFunction, getTheme } from 'office-ui-fabric-react';
import { IQueriesStyleProps, IQueriesStyles } from './Queries.types';


export const getStyles = (props: IQueriesStyleProps): IQueriesStyles => {

  const theme = getTheme();

  return {
    root: {}
  }
}

export const getClassNames = classNamesFunction<IQueriesStyleProps, IQueriesStyles>();