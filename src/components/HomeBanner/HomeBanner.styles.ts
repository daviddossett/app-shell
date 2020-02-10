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
  'projectDetails projectDetails projectMembers'
  `
  
  return {
    root: {
      display: 'grid',
      gridTemplateAreas: defaultGridLayout,
      gridTemplateColumns: 'auto auto auto',
      gridTemplateRows: 'auto',
      padding: '32px 16px',
      maxWidth: '100%',
      background: homePageBanner,
      color: theme.palette.white
    },
    icon: {
      gridArea: 'icon',
      height: '64px',
      marginBottom: '24px'
    },
    heading: {
      gridArea: 'title',
      fontSize: FontSizes.xLargePlus,
      fontWeight: FontWeights.semibold,
      margin: '0'
    },
    description: {
      gridArea: 'description',
      marginBottom: '24px'
    },
    actions: {
      gridArea: 'actions'
    },
    dismissButton: {
      gridArea: 'dismiss',
      marginBottom: '24px',
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
    }
  }
}

export const getClassNames = classNamesFunction<IHomeBannerStyleProps, IHomeBannerStyles>();