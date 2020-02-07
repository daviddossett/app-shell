import { getClassNames } from './Settings.styles';
import { ISettingsProps } from './Settings.types';
import React from 'react';
import { PageHeader } from '@business-app/fabric';

export const SettingsBase: React.FC<ISettingsProps> = (props) => {
  const { styles } = props;
  const classNames = getClassNames(styles);
  
  return (
    <div className={classNames.root}>
      <h1 className={classNames.header}>Settings</h1>
  </div>
  );
}