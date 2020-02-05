import { getClassNames } from './Data.styles';
import { IDataProps } from './Data.types';
import React from 'react';
import { PageHeader } from '@business-app/fabric';

export const DataBase: React.FC<IDataProps> = (props) => {
  const { styles } = props;
  const classNames = getClassNames(styles);
  
  return (
    <div className={classNames.root}>
      <PageHeader title={'Data'}/>
  </div>
  );
}