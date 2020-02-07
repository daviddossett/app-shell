import { getClassNames } from './Data.styles';
import { IDataProps } from './Data.types';
import React from 'react';

export const DataBase: React.FC<IDataProps> = (props) => {
  const { styles } = props;
  const classNames = getClassNames(styles);
  
  return (
    <div className={classNames.root}>
      <h1 className={classNames.header}>Data</h1>
  </div>
  );
}