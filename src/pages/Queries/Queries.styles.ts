import { classNamesFunction, getTheme, FontSizes, FontWeights } from 'office-ui-fabric-react';
import { IQueriesStyleProps, IQueriesStyles } from './Queries.types';


export const getStyles = (props: IQueriesStyleProps): IQueriesStyles => {

  const theme = getTheme();

  return {
    root: {
      height: '100%',
      width: '100%'
    },
    content: {
      height: 'inherit',
      width: 'inherit',
      padding: '24px 32px 32px 32px'
    }
  }
}

export const getClassNames = classNamesFunction<IQueriesStyleProps, IQueriesStyles>();