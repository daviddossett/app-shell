import { getClassNames } from './SuiteHeaderTitle.styles';
import { ISuiteHeaderTitleProps } from './SuiteHeaderTitle.types';
import React from 'react';

export const SuiteHeaderTitleBase: React.FC<ISuiteHeaderTitleProps> = (props) => {
  const { styles } = props;
  const classNames = getClassNames(styles);
  
  return (
    <div className={classNames.root}>
      <a href='/' className={classNames.long}>Dynamics 365 Product Insights</a>
      <a href='/' className={classNames.short}>Product Insights</a>
    </div>
  );
}