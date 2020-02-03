import { getClassNames } from './SuiteHeaderTitle.styles';
import { ISuiteHeaderTitleProps } from './SuiteHeaderTitle.types';
import React from 'react';

export const SuiteHeaderTitleBase: React.FC<ISuiteHeaderTitleProps> = (props) => {
  const { styles } = props;
  const classNames = getClassNames(styles);
  
  return (
    <a href='/' className={classNames.root}>Dynamics 365 Product Insights</a>
  );
}