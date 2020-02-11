import { getClassNames } from './Reports.styles';
import { IReportsProps } from './Reports.types';
import React from 'react';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { Card } from '../../components/Card/Card';

export const ReportsBase: React.FC<IReportsProps> = (props) => {
  const { styles } = props;
  const classNames = getClassNames(styles);
  
  return (
    <div className={classNames.root}>
      <PageHeader text={'Reports'} />
      <Card text={'Content area'} />
  </div>
  );
}