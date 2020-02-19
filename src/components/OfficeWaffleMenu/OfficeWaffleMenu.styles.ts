import { classNamesFunction } from 'office-ui-fabric-react';
import { IOfficeWaffleMenuStyleProps, IOfficeWaffleMenuStyles } from './OfficeWaffleMenu.types';
import { breakpoint } from '../../constants/breakpoints';

const hideMenu: any = {
  [`@media (max-width: ${breakpoint.lg})`]: {
    display: 'flex'
  },
};

const showWaffle: any = {
  [`@media (min-width: ${breakpoint.lg})`]: {
    display: 'flex'
  },
};


export const getStyles = (props: IOfficeWaffleMenuStyleProps): IOfficeWaffleMenuStyles => {
  return {
    root: {
      alignSelf: 'center'
    },
    small: {
      display: 'none',
      selectors: {
        ...hideMenu
      }
    },
    large: {
      display: 'none',
      selectors: {
        ...showWaffle
      }
    }
  }
}

export const getClassNames = classNamesFunction<IOfficeWaffleMenuStyleProps, IOfficeWaffleMenuStyles>();