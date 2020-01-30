import React from 'react';
import { classNamesFunction } from 'office-ui-fabric-react';
import { IPageStyleProps, IPageStyles, IPageProps } from './Page.types';
import { SuiteHeader } from '../SuiteHeader/SuiteHeader';
import { Nav } from '../Nav/Nav';


const getClassNames = classNamesFunction<IPageStyleProps, IPageStyles>();

export const PageBase: React.FC<IPageProps> = (props) => {
  const { styles, theme } = props;
  const classNames = getClassNames(styles, { theme })

  return (
  <div className={classNames.root}>
    <SuiteHeader /> 
    <div className={classNames.area}>
      <Nav styles={styles} className={classNames.nav} />
      <div className={classNames.content} />
    </div>

  </div>
  );
}