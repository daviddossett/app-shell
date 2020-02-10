import { getClassNames } from './HomeBanner.styles';
import { IHomeBannerProps } from './HomeBanner.types';
import React from 'react';
import { Avatar } from '../Avatar/Avatar';
import productIcon from '../../images/product-icon.svg';
import { DefaultButton, Link } from 'office-ui-fabric-react';
import { Card } from '../Card/Card';

export const HomeBannerBase: React.FC<IHomeBannerProps> = (props) => {
  const { styles } = props;
  const classNames = getClassNames(styles);
  
  return (
    <div className={classNames.root}>
      <img src={productIcon} alt={'Product Insights icon'} className={classNames.icon} />
      <h1 className={classNames.heading}>Welcome to Product Insights, Amanda</h1>
      <p className={classNames.description}>Collaborate with your team on real-time data and intelligent insights about how people experience your product</p>
      <div className={classNames.actions}>
        <DefaultButton text={'Dismiss'} className={classNames.dismissButton} />
        <a href={'/queries'} className={classNames.link}>Read the docs</a>
      </div>
    </div>
  );
}