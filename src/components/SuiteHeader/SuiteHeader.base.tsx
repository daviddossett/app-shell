import { getClassNames } from './SuiteHeader.styles';
import { ISuiteHeaderProps } from './SuiteHeader.types';
import React from 'react';
import { FontIcon } from 'office-ui-fabric-react';

export const SuiteHeaderBase: React.FC<ISuiteHeaderProps> = (props) => {
  const { styles } = props;
  const classNames = getClassNames(styles);
  
  return (
    <div className={`${classNames.root} ${props.className}`} />
  );
}