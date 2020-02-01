import { getClassNames } from './SuiteHeaderIcon.styles';
import { ISuiteHeaderIconProps } from './SuiteHeaderIcon.types';
import React from 'react';
import { FontIcon } from 'office-ui-fabric-react';

export const SuiteHeaderIconBase: React.FC<ISuiteHeaderIconProps> = (props) => {
  const { styles } = props;
  const classNames = getClassNames(styles);
  
  return (
    <div className={`${classNames.root} ${props.className}`}>
      <FontIcon iconName={'WaffleOffice365'} style={{color: '#FFFFFF'}}/>
    </div>
  );
}