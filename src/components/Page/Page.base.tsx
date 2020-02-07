import React from 'react';
import { IPageProps } from './Page.types';
import { getClassNames } from './Page.styles';
import { SuiteHeader } from '../SuiteHeader/SuiteHeader';
import { Nav } from '../Nav/Nav';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Home } from '../../pages/Home/Home';
import { Queries } from '../../pages/Queries/Queries';
import { Reports } from '../../pages/Reports/Reports';
import { Settings } from '../../pages/Settings/Settings';
import { Data } from '../../pages/Data/Data';


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
            <Route exact path='/data' component={Data} />
            <Redirect strict from="/data/" to="/data" exact />
            <Route exact path='/settings' component={Settings} />
            <Redirect strict from="/settings/" to="/settings" exact />
          </Switch>
        </main>
    </div>
  );
}