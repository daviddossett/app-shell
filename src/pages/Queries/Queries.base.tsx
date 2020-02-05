import { getClassNames } from './Queries.styles';
import { IQueriesProps } from './Queries.types';
import React from 'react';

export const QueriesBase: React.FC<IQueriesProps> = (props) => {
  const { styles } = props;
  const classNames = getClassNames(styles);
  
  return (
    <div className={classNames.root}/>
  );
}