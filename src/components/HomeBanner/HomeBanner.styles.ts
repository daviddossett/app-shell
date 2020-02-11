import { classNamesFunction, getTheme, FontSizes, FontWeights, AnimationStyles } from 'office-ui-fabric-react';
import { IHomeBannerStyleProps, IHomeBannerStyles } from './HomeBanner.types';
import { breakpoint } from '../../constants/breakpoints';
import { homePageBanner } from '../../constants/theme';


export const getStyles = (props: IHomeBannerStyleProps): IHomeBannerStyles => {

  const theme = getTheme();

  const smIcon: any = {
    [`@media (min-width: ${breakpoint.sm})`]: {
      height: '96px'
    },
  };

  const mdRoot: any = {
    [`@media (min-width: ${breakpoint.md})`]: {
      gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr',
      gridTemplateRows: '64px auto',
      gridColumnGap: '16px',
    },
  };

  const mdBanner: any = {
    [`@media (min-width: ${breakpoint.md})`]: {
      gridColumn: '1 / span 12',
      gridRow: '1 / span 8'
    },
  };

  const mdIcon: any = {
    [`@media (min-width: ${breakpoint.md})`]: {
      height: '96px',
      gridColumn: '2 / span 1',
      gridRow: '2 / span 3',
      margin: '0'
    },
  };

  const mdInfoText: any = {
    [`@media (min-width: ${breakpoint.md})`]: {
      gridColumn: '3 / span 9',
      gridRow: '2 / span 3'
    },
  };

  const mdActions: any = {
    [`@media (min-width: ${breakpoint.md})`]: {
      gridColumn: '3 / span 9',
      gridRow: '5 / span 1',
      marginBottom: '64px'
    },
  };

  const mdCard: any = {
    [`@media (min-width: ${breakpoint.md})`]: {
      gridColumn: '1 / span 12',
      gridRow: '8 / span 2',
      padding: '0 32px 96px 32px',
    },
  };

  const lgIcon: any = {
    [`@media (min-width: ${breakpoint.lg})`]: {
      height: '128px',
      gridColumn: '3 / span 1',
      gridRow: '2 / span 3',
      margin: '0'
    },
  };

  const lgInfoText: any = {
    [`@media (min-width: ${breakpoint.lg})`]: {
      gridColumn: '4 / span 7',
      gridRow: '2 / span 3'
    },
  };

  const lgActions: any = {
    [`@media (min-width: ${breakpoint.lg})`]: {
      gridColumn: '4 / span 7',
      gridRow: '5 / span 1'
    },
  };

  const lgCard: any = {
    [`@media (min-width: ${breakpoint.lg})`]: {
      gridColumn: '2 / span 10',
      gridRow: '8 / span 2',
      padding: '0'
    },
  };

  const xlIcon: any = {
    [`@media (min-width: ${breakpoint.xl})`]: {
      height: '128px',
      gridColumn: '3 / span 1',
      gridRow: '2 / span 3',
      margin: '0'
    },
  };

  const xlInfoText: any = {
    [`@media (min-width: ${breakpoint.xl})`]: {
      gridColumn: '4 / span 6',
      gridRow: '2 / span 3'
    },
  };

  const xlActions: any = {
    [`@media (min-width: ${breakpoint.xl})`]: {
      gridColumn: '4 / span 6',
      gridRow: '5 / span 1'
    },
  };

  const xxlIcon: any = {
    [`@media (min-width: ${breakpoint.xxl})`]: {
      height: '128px',
      gridColumn: '4 / span 1',
      gridRow: '2 / span 3',
      margin: '0'
    },
  };

  const xxlInfoText: any = {
    [`@media (min-width: ${breakpoint.xxl})`]: {
      gridColumn: '5 / span 4',
      gridRow: '2 / span 3'
    },
  };

  const xxlActions: any = {
    [`@media (min-width: ${breakpoint.xxl})`]: {
      gridColumn: '5 / span 4',
      gridRow: '5 / span 1'
    },
  };

  const xxlCard: any = {
    [`@media (min-width: ${breakpoint.xxl})`]: {
      gridColumn: '3 / span 8',
      gridRow: '8 / span 2',
      padding: '0'
    },
  };

  

  return {
    root: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gridTemplateRows: 'auto',
      color: theme.palette.white,
      selectors: {
        ...mdRoot
      }
    },
    banner: {
      gridColumn: '1 / span 3',
      gridRow: '1 / span 6',
      background: homePageBanner,
      selectors: {
        ...mdBanner
      }
    },
    icon: {
      height: '64px',
      gridColumn: '1 / span 3',
      gridRow: '1 / span 1',
      margin: '32px 0',
      padding: '0 16px',
      // ...AnimationStyles.slideUpIn10,
      selectors: {
        ...smIcon,
        ...mdIcon,
        ...lgIcon,
        ...xlIcon,
        ...xxlIcon
      }
    },
    infoText: {
      gridColumn: '1 / span 3',
      gridRow: '2 / span 1',
      // ...AnimationStyles.slideUpIn10,
      selectors: {
        ...mdInfoText,
        ...lgInfoText,
        ...xlInfoText,
        ...xxlInfoText
      }
    },
    heading: {
      fontSize: FontSizes.xLargePlus,
      fontWeight: FontWeights.semibold,
      margin: '0 0 24px 0',
      padding: '0 16px',
    },
    description: {
      margin: '0 0 24px 0',
      opacity: '0.85',
      padding: '0 16px',
    },
    actions: {
      display: 'flex',
      alignItems: 'center',
      padding: '0 16px',
      marginBottom: '32px',
      gridColumn: '1 / span 3',
      gridRow: '4 / span 1',
      // ...AnimationStyles.slideUpIn10,
      selectors: {
        ...mdActions,
        ...lgActions,
        ...xlActions,
        ...xxlActions
      }
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
      gridRow: '6 / span 2',
      // ...AnimationStyles.slideUpIn10,
      selectors: {
        ...mdCard,
        ...lgCard,
        ...xxlCard
      }
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