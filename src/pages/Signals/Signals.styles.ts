import { classNamesFunction } from 'office-ui-fabric-react';
import { ISignalsStyleProps, ISignalsStyles } from './Signals.types';


export const getStyles = (props: ISignalsStyleProps): ISignalsStyles => {
  return {
    root: {}
  }
}

export const getClassNames = classNamesFunction<ISignalsStyleProps, ISignalsStyles>();