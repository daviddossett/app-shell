import React from 'react';
import { getClassNames } from './SuiteHeader.styles';
import { ISuiteHeaderProps } from './SuiteHeader.types';
import { OfficeWaffleMenu } from '../OfficeWaffleMenu/OfficeWaffleMenu';
import { SuiteHeaderTitle } from '../SuiteHeaderTitle/SuiteHeaderTitle';
import { SuiteHeaderActions } from '../SuiteHeaderActions/SuiteHeaderActions';
import { SuiteHeaderSearch } from '../SuiteHeaderSearch/SuiteHeaderSearch';

export const SuiteHeaderBase: React.FC<ISuiteHeaderProps> = (props) => {
  const { styles } = props;
  const classNames = getClassNames(styles);
  
  return (
    <div className={`${classNames.root} ${props.className}`}>
      <OfficeWaffleMenu className={classNames.waffle} />
      <SuiteHeaderTitle className={classNames.title} />
      <SuiteHeaderSearch className={classNames.search} />
      <SuiteHeaderActions className={classNames.actions} />
    </div>
  );
}