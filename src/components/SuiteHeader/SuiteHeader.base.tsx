import { getClassNames } from './SuiteHeader.styles';
import { ISuiteHeaderProps } from './SuiteHeader.types';
import React from 'react';
import { SuiteHeaderIcon } from '../SuiteHeaderIcon/SuiteHeaderIcon';
import { SearchBox } from 'office-ui-fabric-react';

export const SuiteHeaderBase: React.FC<ISuiteHeaderProps> = (props) => {
  const { styles } = props;
  const classNames = getClassNames(styles);
  
  return (
    <div className={`${classNames.root} ${props.className}`}>
      <div className={classNames.leftActions}>
        <SuiteHeaderIcon icon={{iconName: 'WaffleOffice365'}} />
      </div>
      <a href='/' className={classNames.title}>Dynamics 365 Product Insights</a>
      <SearchBox placeholder={'Search'} className={classNames.search} />
      <div className={classNames.rightActions}>
        <SuiteHeaderIcon icon={{iconName: 'Ringer'}} />
        <SuiteHeaderIcon icon={{iconName: 'Help'}} />
        <SuiteHeaderIcon icon={{iconName: 'Settings'}} />
        <SuiteHeaderIcon icon={{iconName: 'Contact'}} />
      </div>
    </div>
  );
}