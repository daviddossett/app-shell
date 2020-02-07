import { getClassNames } from './Queries.styles';
import { IQueriesProps } from './Queries.types';
import React from 'react';
import { PageHeader } from '@business-app/fabric';

export const QueriesBase: React.FC<IQueriesProps> = (props) => {
  const { styles } = props;
  const classNames = getClassNames(styles);
  
  return (
    <div className={classNames.root}>
      <h1 className={classNames.header}>Queries</h1>
  </div>
  );
}