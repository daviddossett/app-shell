import { classNamesFunction, getTheme, FontSizes, FontWeights, AnimationStyles } from 'office-ui-fabric-react';
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
      gridTemplateColumns: '1fr 1fr 1fr',
      gridTemplateRows: 'auto 100px auto',
      color: theme.palette.white
    },
    banner: {
      gridColumn: '1 / span 3',
      gridRow: '1 / span 2',
      background: homePageBanner,
    },
    wrapper: {
      padding: '32px 16px',
      gridColumn: '1 / span 3',
      gridRow: '1 / span 1'
    },
    icon: {
      height: '64px',
      marginBottom: '32px'
    },
    heading: {
      fontSize: FontSizes.xLargePlus,
      fontWeight: FontWeights.semibold,
      margin: '0 0 24px 0',
    },
    description: {
      margin: '0 0 24px 0',
      opacity: '0.85'
    },
    actions: {
      display: 'flex',
      alignItems: 'center'
    },
    dismissButton: {
      alignSelf: 'center',
      margin: '0',
      border: 'none',
      color: theme.palette.themePrimary
    },
    link: {
      color: 'white',
      marginLeft: '16px',
      alignSelf: 'center'
    },
    cardWrapper: {
      padding: '0 16px 96px 16px',
      gridColumn: '1 / span 3',
      gridRow: '2 / span 2'
    },
    card: {
      padding: '16px',
      boxShadow: '0 3.2px 7.2px 0 rgba(0,0,0,.132), 0 0.6px 1.8px 0 rgba(0,0,0,.108)',
      borderRadius: '4px',
      backgroundColor: theme.palette.white,
      height: '400px',
      gridRow: '2 / span 2'
    },
    contentArea: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(252, 37, 118, 0.12)',
      height: '100%'
    },
    text: {
      textAlign: 'center',
      color: '#FC2576' // Todo: Make this a constant for reuse
    }
  }
}

export const getClassNames = classNamesFunction<IHomeBannerStyleProps, IHomeBannerStyles>();