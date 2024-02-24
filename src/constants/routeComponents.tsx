import MainPage from 'pages/MainPage/MainPage';
import Page404 from 'pages/Page404/Page404';

import {Routes} from './routes';

const RouteComponents = [
  {
    exact: true,
    path: Routes.mainLanding,
    component: MainPage,
    pageTitle: 'Battle',
  },
  {
    exact: true,
    path: Routes.page404,
    component: Page404,
    pageTitle: 'Error 404',
  },
].map((item, index) => ({...item, key: index}));

export {RouteComponents};
