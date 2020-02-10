import { getClassNames } from './HomeBanner.styles';
import { IHomeBannerProps } from './HomeBanner.types';
import React from 'react';
import { Avatar } from '../Avatar/Avatar';

export const HomeBannerBase: React.FC<IHomeBannerProps> = (props) => {
  const { styles } = props;
  const classNames = getClassNames(styles);
  
  return (
    <div className={classNames.root}>
      
    </div>
  );
}