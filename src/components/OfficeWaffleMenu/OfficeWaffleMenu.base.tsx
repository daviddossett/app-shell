import { getClassNames } from './OfficeWaffleMenu.styles';
import { IOfficeWaffleMenuProps } from './OfficeWaffleMenu.types';
import React from 'react';
import { SuiteHeaderIcon } from '../SuiteHeaderIcon/SuiteHeaderIcon';

export const OfficeWaffleMenuBase: React.FC<IOfficeWaffleMenuProps> = (props) => {
  const { styles } = props;
  const classNames = getClassNames(styles);
  
  return (
    <SuiteHeaderIcon icon={{iconName: 'WaffleOffice365'}} />
  );
}