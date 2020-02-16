import React from 'react';
import { SearchBox } from 'office-ui-fabric-react';
import { ISuiteHeaderSearchProps } from './SuiteHeaderSearch.types';

export const SuiteHeaderSearchBase: React.FC<ISuiteHeaderSearchProps> = (props) => {
  const { styles } = props;
  return (
    <SearchBox placeholder={'Search'} styles={styles} />
  );
}