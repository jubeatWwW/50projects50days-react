import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

const kebabToTitleCase = name =>
  name
    .split('-')
    .map(word => word.replace(/^./, c => c.toUpperCase()))
    .join(' ');

const projectNames = [
  'expanding-cards',
  'progress-steps',
  'rotating-nav-animation',
  'hidden-search',
  'blurry-loading',
  'scroll-animation',
  'split-landing-page',
  'form-input-wave',
  'sound-board',
  'dad-jokes',
];

export const routes = [
  {
    name: 'Home',
    path: '/',
    exact: true,
    component: lazy(() => import('../../modules/home/home')),
  },
  ...projectNames.map(name => ({
    name: kebabToTitleCase(name),
    path: `/projects/${name}`,
    exact: true,
    component: lazy(() => import(`../../modules/${name}/${name}`)),
  })),
];

const Router = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Switch>
      {routes.map(route => (
        <Route {...route} key={route.name}></Route>
      ))}
    </Switch>
  </Suspense>
);

export default Router;
