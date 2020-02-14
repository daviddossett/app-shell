import React from 'react';
import { IPageProps } from './Page.types';
import { getClassNames } from './Page.styles';
import { SuiteHeader } from '../SuiteHeader/SuiteHeader';
import { Nav } from '../Nav/Nav';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Home } from '../../pages/Home/Home';
import { Queries } from '../../pages/Queries/Queries';
import { Reports } from '../../pages/Reports/Reports';
import { BasicSettings } from '../../pages/BasicSettings/BasicSettings';
import { Data } from '../../pages/Data/Data';
import { Billing } from '../../pages/Billing/Billing';
import { ProjectMembers } from '../../pages/ProjectMembers/ProjectMembers';
import { Signals } from '../../pages/Signals/Signals';
import { Sources } from '../../pages/Sources/Sources';
import { Metrics } from '../../pages/Metrics/Metrics';
import { Segments } from '../../pages/Segments/Segments';

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
          <Redirect strict from="/queries/" to="/queries" exact />
          <Route exact path='/reports' component={Reports} />
          <Redirect strict from="/reports/" to="/reports" exact />

          <Route exact path='/data/signals' component={Signals} />
          <Redirect strict from="/data" to="/data/signals" exact />
          <Redirect strict from="/data/" to="/data/signals" exact />

          <Route exact path='/data/sources' component={Sources} />
          <Redirect strict from="/data/sources/" to="/data/sources" exact />

          <Route exact path='/data/metrics' component={Metrics} />
          <Redirect strict from="/data/metrics/" to="/data/metrics" exact />

          <Route exact path='/data/segments' component={Segments} />
          <Redirect strict from="/data/segments/" to="/data/segments" exact />



          <Route exact path='/settings/basics' component={BasicSettings} />
          <Redirect strict from="/settings/" to="/settings" exact />
          <Route exact path='/settings/billing' component={Billing} />
          <Redirect strict from="/billing/" to="/settings" exact />
          <Route exact path='/settings/members' component={ProjectMembers} />
          <Redirect strict from="/members/" to="/settings" exact />
        </Switch>
      </main>
    </div>
  );
}