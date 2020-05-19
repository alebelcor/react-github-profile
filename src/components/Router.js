import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import PageLayout from 'src/layouts/PageLayout';

import RepositoriesPage from 'src/pages/RepositoriesPage';
import OverviewPage from 'src/pages/OverviewPage';

import { ROUTES } from 'src/utils/constants';

export default () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <PageLayout>
        <Switch>
          <Route exact path={ROUTES.OVERVIEW}>
            <OverviewPage />
          </Route>

          <Route exact path={ROUTES.REPOSITORIES}>
            <RepositoriesPage />
          </Route>

          <Route path="*">
            <Redirect to={ROUTES.OVERVIEW} />
          </Route>
        </Switch>
      </PageLayout>
    </Router>
  );
};
