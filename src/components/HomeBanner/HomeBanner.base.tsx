import { getClassNames } from './HomeBanner.styles';
import { IHomeBannerProps } from './HomeBanner.types';
import React from 'react';
import productIcon from '../../images/product-icon.svg';
import { DefaultButton } from 'office-ui-fabric-react';

export const HomeBannerBase: React.FC<IHomeBannerProps> = (props) => {
  const { styles } = props;
  const classNames = getClassNames(styles);
  
  return (
    <div className={classNames.root}>
      <div className={classNames.banner} />
        <img src={productIcon} alt={'Product Insights icon'} className={classNames.icon} />
        <div className={classNames.infoText}>
            <h1 className={classNames.heading}>Welcome to Product Insights, Amanda</h1>
            <p className={classNames.description}>Collaborate with your team on real-time data and intelligent insights about how customers experience your product</p>
          </div>
        <div className={classNames.actions}>
          <DefaultButton text={'Dismiss'} className={classNames.dismissButton} />
          <a href={'/queries'} className={classNames.link}>Read the docs</a>
        </div>
        <div className={classNames.cardWrapper}>
          <div className={classNames.card}>
            <div className={classNames.contentArea}>
              <span className={classNames.text}>Content area</span>
            </div>
          </div>
        </div>
    </div>
  );
}