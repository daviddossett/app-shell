import { getClassNames } from './SuiteHeader.styles';
import { ISuiteHeaderProps } from './SuiteHeader.types';
import React from 'react';
import { SuiteHeaderIcon } from '../SuiteHeaderIcon/SuiteHeaderIcon';

export const SuiteHeaderBase: React.FC<ISuiteHeaderProps> = (props) => {
  const { styles } = props;
  const classNames = getClassNames(styles);
  
  return (
    <div className={`${classNames.root} ${props.className}`}>
        <SuiteHeaderIcon icon={{iconName: 'WaffleOffice365'}} />
        <SuiteHeaderIcon icon={{iconName: 'Ringer'}} />
        <SuiteHeaderIcon icon={{iconName: 'Help'}} />
        <SuiteHeaderIcon icon={{iconName: 'Settings'}} />
        <SuiteHeaderIcon icon={{iconName: 'Contact'}} />
    </div>
  );
}