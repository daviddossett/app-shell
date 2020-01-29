import React from 'react';
import { classNamesFunction } from 'office-ui-fabric-react';
import { IPageStyleProps, IPageStyles } from './Page.types';

const getClassNames = classNamesFunction<IPageStyleProps, IPageStyles>();

export const PageBase: React.FC = (props) => {
  const { styles, theme } = props;
  const classNames = getClassNames(styles, { theme })

  return (
    <div className={classNames.root}></div>
  );
}