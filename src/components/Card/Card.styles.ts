import { classNamesFunction } from 'office-ui-fabric-react';
import { ICardStyleProps, ICardStyles } from './Card.types';

export const getStyles = (props: ICardStyleProps): ICardStyles => {

  // const showFullMenu: any = {
  //   [`@media (min-width: ${breakpoint.md})`]: {
  //     display: 'flex',
  //     alignItems: 'center'
  //   },
  // };

  // const hideSmallMenu: any = {
  //   [`@media (min-width: ${breakpoint.md})`]: {
  //     display: 'none'
  //   },
  // };
  
  return {
    root: {
      display: 'flex',
      alignItems: 'center'
    }
  }
}

export const getClassNames = classNamesFunction<ICardStyleProps, ICardStyles>();