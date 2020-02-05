import { classNamesFunction, getTheme } from 'office-ui-fabric-react';
import { IDataStyleProps, IDataStyles } from './Data.types';


export const getStyles = (props: IDataStyleProps): IDataStyles => {

  const theme = getTheme();

  return {
    root: {}
  }
}

export const getClassNames = classNamesFunction<IDataStyleProps, IDataStyles>();