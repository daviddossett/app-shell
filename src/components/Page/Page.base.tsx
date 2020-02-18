import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { IPageProps } from './Page.types';
import { getClassNames } from './Page.styles';
import { SuiteHeader } from '../SuiteHeader/SuiteHeader';
import { Nav } from '../Nav/Nav';
import { Home } from '../../pages/Home/Home';
import { Queries } from '../../pages/Queries/Queries';
import { Reports } from '../../pages/Reports/Reports';
import { Signals } from '../../pages/Signals/Signals';
import { Sources } from '../../pages/Sources/Sources';
import { Metrics } from '../../pages/Metrics/Metrics';
import { Segments } from '../../pages/Segments/Segments';
import { BasicSettings } from '../../pages/BasicSettings/BasicSettings';
import { Billing } from '../../pages/Billing/Billing';
import { ProjectMembers } from '../../pages/ProjectMembers/ProjectMembers';

export const PageBase: React.FC<IPageProps> = (props) => {
  const { styles, theme } = props;
  const classNames = getClassNames(styles, { theme })

  return (
    <div className={classNames.root}>
      <SuiteHeader className={classNames.header}/>
      <Nav />
      <main className={classNames.content}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Redirect strict from="/home/" to="/" exact />
          <Redirect strict from="/home" to="/" exact />
          <Route exact path='/queries' component={Queries} />
          <Route exact path='/reports' component={Reports} />
          <Route exact path='/data/signals' component={Signals} />
          <Route exact path='/data/sources' component={Sources} />
          <Route exact path='/data/metrics' component={Metrics} />
          <Route exact path='/data/segments' component={Segments} />
          <Route exact path='/settings/basics' component={BasicSettings} />
          <Route exact path='/settings/billing' component={Billing} />
          <Route exact path='/settings/members' component={ProjectMembers} />
        </Switch>
      </main>
    </div>
  );
}