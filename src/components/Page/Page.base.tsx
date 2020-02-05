import React from 'react';
import { IPageProps } from './Page.types';
import { getClassNames } from './Page.styles';
import { SuiteHeader } from '../SuiteHeader/SuiteHeader';
import { Nav } from '../Nav/Nav';
import { Switch, Route, Redirect } from 'react-router-dom';

export const PageBase: React.FC<IPageProps> = (props) => {
  const { styles, theme } = props;
  const classNames = getClassNames(styles, { theme })

  return (
    <div className={classNames.root}>
        <SuiteHeader className={classNames.header}/>
        <Nav />
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
    </div>
  );
}