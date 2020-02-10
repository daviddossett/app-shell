import { classNamesFunction, getTheme, FontSizes, FontWeights } from 'office-ui-fabric-react';
import { IHomeBannerStyleProps, IHomeBannerStyles } from './HomeBanner.types';
import { breakpoint } from '../../constants/breakpoints';
import { homePageBanner } from '../../constants/theme';


export const getStyles = (props: IHomeBannerStyleProps): IHomeBannerStyles => {

  const theme = getTheme();
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
      padding: '32px 16px',
      maxWidth: '100%',
      background: homePageBanner,
      color: theme.palette.white
    },
    newProjectContent: {},
    icon: {
      height: '64px',
    },
    heading: {
      fontSize: FontSizes.xLargePlus,
      fontWeight: FontWeights.semibold
    },
    description: {},
    dismissButton: {},
    link: {},
    projectDetails: {},
    projectName: {
      fontSize: FontSizes.xLarge,
      fontWeight: FontWeights.semibold
    }
  }
}

export const getClassNames = classNamesFunction<IHomeBannerStyleProps, IHomeBannerStyles>();