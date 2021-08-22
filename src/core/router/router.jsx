import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

export const routes = [
  {
    name: 'Home',
    path: '/',
    exact: true,
    component: lazy(() => import('../../modules/home/home')),
  },
  {
    name: 'Expanding Cards',
    path: '/projects/expanding-cards',
    exact: true,
    component: lazy(() =>
      import('../../modules/expanding-cards/expanding-cards')
    ),
  },
  {
    name: 'Progress Steps',
    path: '/projects/progress-steps',
    exact: true,
    component: lazy(() =>
      import('../../modules/progress-steps/progress-steps')
    ),
  },
  {
    name: 'Rotating Nav Animation',
    path: '/projects/rotating-nav-animation',
    exact: true,
    component: lazy(() =>
      import('../../modules/rotating-nav-animation/rotating-nav-animation')
    ),
  },
  {
    name: 'Hidden Search',
    path: '/projects/hidden-search',
    exact: true,
    component: lazy(() => import('../../modules/hidden-search/hidden-search')),
  },
];

const Router = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Switch>
      {routes.map(route => (
        <Route {...route}></Route>
      ))}
    </Switch>
  </Suspense>
);

export default Router;