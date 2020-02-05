import { classNamesFunction, getTheme } from 'office-ui-fabric-react';
import { IQueriesStyleProps, IQueriesStyles } from './Queries.types';


export const getStyles = (props: IQueriesStyleProps): IQueriesStyles => {

  const theme = getTheme();

  return {
    root: {
      height: '100%',
      width: '100%'
    }
  }
}

export const getClassNames = classNamesFunction<IQueriesStyleProps, IQueriesStyles>();