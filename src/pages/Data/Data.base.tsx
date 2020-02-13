import React from 'react';
import { getClassNames } from './Data.styles';
import { IDataProps } from './Data.types';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { Card } from '../../components/Card/Card';

export const DataBase: React.FC<IDataProps> = (props) => {
  const { styles } = props;
  const classNames = getClassNames(styles);
  
  return (
    <div className={classNames.root}>
      <PageHeader text={'Data'}/>
      <Card text={'Content area'} />
  </div>
  );
}