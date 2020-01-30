import { classNamesFunction } from 'office-ui-fabric-react';
import { ISuiteHeaderProps, ISuiteHeaderStyleProps, ISuiteHeaderStyles } from './SuiteHeader.types';
import React from 'react';

const getClassNames = classNamesFunction<ISuiteHeaderStyleProps, ISuiteHeaderStyles>();

export const SuiteHeaderBase: React.FC<ISuiteHeaderProps> = (props) => {
  const { styles } = props;
  const classNames = getClassNames(styles);
  
  return (
    <div className={classNames.root}>
      {/* <SuiteHeaderIcon />
      <SuiteHeaderSearch />
      <SuiteHeaderAppTitle />
      <SuiteHeaderIcon />
      <SuiteHeaderIcon />
      <SuiteHeaderIcon />
      <SuiteHeaderIcon /> */}
    </div>
  );
}