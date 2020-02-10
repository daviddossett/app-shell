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
      <div className={classNames.newProjectContent}>
        <img src={productIcon} alt={'Product Insights icon'} className={classNames.icon} />
        <h1 className={classNames.heading}>Welcome to Product Insights, Amanda</h1>
        <p className={classNames.description}>Collaborate with your teammates on real-time data and intelligent insights about how people experience your product</p>
        <DefaultButton text={'Dismiss'} className={classNames.dismissButton} />
        <Link text={'Read the docs'} className={classNames.link}/>
      </div>
      <div className={classNames.projectDetails}>
        <h2 className={classNames.projectName}>Venmo</h2>
        <span>No description yet</span>
        <Avatar />
        <span>1 member</span>
      </div>
    </div>
  );
}