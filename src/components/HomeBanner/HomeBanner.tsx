import { styled } from 'office-ui-fabric-react';
import { IHomeBannerProps, IHomeBannerStyleProps, IHomeBannerStyles } from './HomeBanner.types';
import { getStyles } from './HomeBanner.styles';
import { HomeBannerBase } from './HomeBanner.base'

export const HomeBanner = styled<IHomeBannerProps, IHomeBannerStyleProps, IHomeBannerStyles>(HomeBannerBase, getStyles)