import { getClassNames } from './SuiteHeaderActions.styles';
import { ISuiteHeaderActionsProps } from './SuiteHeaderActions.types';
import React from 'react';
import { SuiteHeaderIcon } from '../SuiteHeaderIcon/SuiteHeaderIcon';
import { Avatar } from '../Avatar/Avatar';

export const SuiteHeaderActionsBase: React.FC<ISuiteHeaderActionsProps> = (props) => {
  const { styles, toggleNav } = props;
  const classNames = getClassNames(styles);
  
  return (
    <div className={classNames.root}>
      <div className={classNames.fullMenu}>
        <SuiteHeaderIcon icon={{iconName: 'Ringer'}} isDark={true} />
        <SuiteHeaderIcon icon={{iconName: 'Megaphone'}} isDark={true} />
        <SuiteHeaderIcon icon={{iconName: 'Settings'}} isDark={true} />
        <SuiteHeaderIcon icon={{iconName: 'Help'}} isDark={true} />
      </div>
      <div className={classNames.smallMenu}>
        <SuiteHeaderIcon icon={{iconName: 'Search'}} isDark={true} />
        <SuiteHeaderIcon icon={{iconName: 'More'}} isDark={true} toggleNav={toggleNav} />
      </div>
      <Avatar />
    </div>
  );
}