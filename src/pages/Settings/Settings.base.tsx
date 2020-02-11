import { getClassNames } from './Settings.styles';
import { ISettingsProps } from './Settings.types';
import React from 'react';
import { PageHeader } from '../../components/PageHeader/PageHeader';

export const SettingsBase: React.FC<ISettingsProps> = (props) => {
  const { styles } = props;
  const classNames = getClassNames(styles);
  
  return (
    <div className={classNames.root}>
      <PageHeader text={'Settings'}/>
  </div>
  );
}