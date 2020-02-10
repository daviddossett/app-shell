import { classNamesFunction } from 'office-ui-fabric-react';
import { IHomeBannerStyleProps, IHomeBannerStyles } from './HomeBanner.types';
import { breakpoint } from '../../constants/breakpoints';
import { homePageBanner } from '../../constants/theme';


export const getStyles = (props: IHomeBannerStyleProps): IHomeBannerStyles => {

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
      display: 'grid',
      alignItems: 'center',
      height: '50vh',
      width: '100%',
      background: homePageBanner,
    }
  }
}

export const getClassNames = classNamesFunction<IHomeBannerStyleProps, IHomeBannerStyles>();