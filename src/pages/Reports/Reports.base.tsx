import { getClassNames } from './Reports.styles';
import { IReportsProps } from './Reports.types';
import React from 'react';

export const ReportsBase: React.FC<IReportsProps> = (props) => {
  const { styles } = props;
  const classNames = getClassNames(styles);
  
  return (
    <div className={classNames.root}/>
  );
}