import { classNamesFunction } from 'office-ui-fabric-react';
import { ISignalPageStyleProps, ISignalPageStyles } from './SignalPage.types';


export const getStyles = (props: ISignalPageStyleProps): ISignalPageStyles => {
  return {
    root: {}
  }
}

export const getClassNames = classNamesFunction<ISignalPageStyleProps, ISignalPageStyles>();