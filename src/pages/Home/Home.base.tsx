import { getClassNames } from './Home.styles';
import { IHomeProps } from './Home.types';
import React from 'react';

export const HomeBase: React.FC<IHomeProps> = (props) => {
  const { styles, children } = props;
  const classNames = getClassNames(styles);
  
  return (
    <div className={classNames.root}>
      {children}
    </div>
  );
}