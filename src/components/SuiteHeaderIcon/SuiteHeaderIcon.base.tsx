import { getClassNames } from './SuiteHeaderIcon.styles';
import { ISuiteHeaderIconProps } from './SuiteHeaderIcon.types';
import React from 'react';
import { IconButton, IIconProps } from 'office-ui-fabric-react';

export const SuiteHeaderIconBase: React.FC<ISuiteHeaderIconProps> = (props) => {
  const { styles, icon } = props;
  const classNames = getClassNames(styles);

  return (
    <div>
      <IconButton iconProps={icon} />
    </div>
  );
}