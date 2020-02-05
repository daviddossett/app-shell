import { styled } from 'office-ui-fabric-react';
import { IHomeProps, IHomeStyleProps, IHomeStyles } from './Home.types';
import { getStyles } from './Home.styles';
import { HomeBase } from './Home.base'

export const Home = styled<IHomeProps, IHomeStyleProps, IHomeStyles>(HomeBase, getStyles)