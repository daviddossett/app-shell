import { classNamesFunction } from 'office-ui-fabric-react';
import { IOfficeWaffleMenuStyleProps, IOfficeWaffleMenuStyles } from './OfficeWaffleMenu.types';


export const getStyles = (props: IOfficeWaffleMenuStyleProps): IOfficeWaffleMenuStyles => {
  return {
    root: {
      display: 'flex',
      alignSelf: 'center'
    }
  }
}

export const getClassNames = classNamesFunction<IOfficeWaffleMenuStyleProps, IOfficeWaffleMenuStyles>();