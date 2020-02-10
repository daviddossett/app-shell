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
      padding: '32px 32px 32px 32px'
    },
    commandBar: {
      borderBottom: `1px solid ${theme.palette.neutralLight}`
    }
  }
}

export const getClassNames = classNamesFunction<IQueriesStyleProps, IQueriesStyles>();