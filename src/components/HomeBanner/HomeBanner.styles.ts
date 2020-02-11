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

  const defaultGridLayout = `
  'icon icon icon'
  'title title title'
  'description description description'
  'actions actions actions'
  'card card card'
  `
  
  return {
    root: {
      display: 'grid',
      gridTemplateAreas: defaultGridLayout,
      gridTemplateColumns: 'auto auto auto',
      gridTemplateRows: 'auto',
      gridRowGap: '32px',
      padding: '32px 16px',
      maxWidth: '100%',
      background: homePageBanner,
      color: theme.palette.white
    },
    icon: {
      gridArea: 'icon',
      height: '64px'
    },
    heading: {
      gridArea: 'title',
      fontSize: FontSizes.xLargePlus,
      fontWeight: FontWeights.semibold,
      margin: '0'
    },
    description: {
      gridArea: 'description',
      margin: '0',
      opacity: '0.85'
    },
    actions: {
      gridArea: 'actions',
      display: 'flex',
      alignItems: 'center'
    },
    dismissButton: {
      gridArea: 'dismiss',
      alignSelf: 'center',
      margin: '0',
      border: 'none',
      color: theme.palette.themePrimary
    },
    link: {
      gridArea: 'link',
      color: 'white',
      marginLeft: '16px',
      alignSelf: 'center'
    },
    card: {
      gridArea: 'card',
      padding: '16px',
      boxShadow: '0 1.6px 3.6px 0 rgba(0,0,0,.132), 0 0.3px 0.9px 0 rgba(0,0,0,.108)',
      borderRadius: '4px',
      backgroundColor: theme.palette.white,
      height: '400px'
    },
    contentArea: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(252, 37, 118, 0.12)',
      width: '100%',
      height: '100%'
    },
    text: {
      textAlign: 'center',
      color: '#FC2576' // Todo: Make this a constant for reuse
    }
  }
}

export const getClassNames = classNamesFunction<IHomeBannerStyleProps, IHomeBannerStyles>();