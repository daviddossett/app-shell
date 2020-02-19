import React from 'react';
import { getClassNames } from './SuiteHeader.styles';
import { ISuiteHeaderProps } from './SuiteHeader.types';
import { OfficeWaffleMenu } from '../OfficeWaffleMenu/OfficeWaffleMenu';
import { SuiteHeaderTitle } from '../SuiteHeaderTitle/SuiteHeaderTitle';
import { SuiteHeaderActions } from '../SuiteHeaderActions/SuiteHeaderActions';
import { SuiteHeaderSearch } from '../SuiteHeaderSearch/SuiteHeaderSearch';

export const SuiteHeaderBase: React.FC<ISuiteHeaderProps> = (props) => {
  const { styles, toggleNav } = props;
  const classNames = getClassNames(styles);
  
  return (
    <div className={`${classNames.root} ${props.className}`}>
      <div className={classNames.waffleWithTitle}>
        <OfficeWaffleMenu toggleNav={toggleNav} />
        <SuiteHeaderTitle />
      </div>
      <SuiteHeaderSearch />
      <SuiteHeaderActions />
    </div>
  );
}