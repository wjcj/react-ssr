import React from 'react';
import { renderRoutes } from "react-router-config";
import { Link } from "react-router-dom";
import Layout from './componments/layout';
import Header from './componments/header';
import Loading from './componments/loading';
import Loadable from 'react-loadable';
import About from './pages/about';
import Login from './pages/login';
import Protected from './pages/protected';
import NotFound from './pages/404';


const Home = Loadable({
  loader: () => import('./pages/home'),
  loading: Loading,
});

const User = Loadable({
  loader: () => import('./pages/user'),
  loading: Loading,
});

// Root 组件通过 props.route.routes 拿到下一层路由进行渲染，完成多级路由渲染
const Root = ({ route }) => (
  <Layout>
    <Header>
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/user">User</Link>
      <Link to="/protected">Protected</Link>
    </Header>
    {renderRoutes(route.routes)}
  </Layout>
);

export const routes = [
  {
    component: Root,
    routes: [
      {
        path: "/",
        exact: true,
        component: Home,
      },
      {
        path: "/home",
        exact: true,
        component: Home,
      },
      {
        path: "/user",
        exact: true,
        component: User,
      },
      {
        path: "/about",
        exact: true,
        component: About,
      },
      {
        path: "/login",
        exact: true,
        component: Login,
      },
      {
        path: "/protected",
        exact: true,
        component: Protected,
      },
      {
        path: "*",
        component: NotFound,
      },
    ]
  }
];

export default () => <div>{renderRoutes(routes)}</div>;
