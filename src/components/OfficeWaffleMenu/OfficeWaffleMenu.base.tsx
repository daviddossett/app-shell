import React from 'react';
import { IOfficeWaffleMenuProps } from './OfficeWaffleMenu.types';
import { SuiteHeaderIcon } from '../SuiteHeaderIcon/SuiteHeaderIcon';
import { getClassNames } from '../OfficeWaffleMenu/OfficeWaffleMenu.styles';

export const OfficeWaffleMenuBase: React.FC<IOfficeWaffleMenuProps> = (props) => {
  const { styles, toggleNav } = props;
  const classNames = getClassNames(styles);

  return (
    <>
      <div className={classNames.large}>
        <SuiteHeaderIcon icon={{iconName: 'WaffleOffice365'}} />
      </div>
      <div className={classNames.small}>
        <SuiteHeaderIcon icon={{iconName: 'GlobalNavButton'}} toggleNav={toggleNav} />
    </div>
  </>
  );
}