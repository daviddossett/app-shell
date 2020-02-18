import React from 'react';
import { IOfficeWaffleMenuProps } from './OfficeWaffleMenu.types';
import { SuiteHeaderIcon } from '../SuiteHeaderIcon/SuiteHeaderIcon';

export const OfficeWaffleMenuBase: React.FC<IOfficeWaffleMenuProps> = () => {
  return (
    <SuiteHeaderIcon icon={{iconName: 'WaffleOffice365'}} isDark={true} />
  );
}