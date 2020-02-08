import { getClassNames } from './SuiteHeaderActions.styles';
import { ISuiteHeaderActionsProps } from './SuiteHeaderActions.types';
import React from 'react';
import { SuiteHeaderIcon } from '../SuiteHeaderIcon/SuiteHeaderIcon';
import { Avatar } from '../Avatar/Avatar';

export const SuiteHeaderActionsBase: React.FC<ISuiteHeaderActionsProps> = (props) => {
  const { styles } = props;
  const classNames = getClassNames(styles);
  
  return (
    <div className={classNames.root}>
        <SuiteHeaderIcon icon={{iconName: 'Ringer'}} />
        <SuiteHeaderIcon icon={{iconName: 'Megaphone'}} />
        <SuiteHeaderIcon icon={{iconName: 'Settings'}} />
        <SuiteHeaderIcon icon={{iconName: 'Help'}} />
        <Avatar />
    </div>
  );
}