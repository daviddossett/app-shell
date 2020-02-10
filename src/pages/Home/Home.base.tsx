import { getClassNames } from './Home.styles';
import { IHomeProps } from './Home.types';
import React from 'react';
import { HomeBanner } from '../../components/HomeBanner/HomeBanner';

export const HomeBase: React.FC<IHomeProps> = (props) => {
  const { styles } = props;
  const classNames = getClassNames(styles);
  
  return (
    <div className={classNames.root}>
      <HomeBanner />
    </div>
  );
}