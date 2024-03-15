import React from 'react';
/**
 * @description 主进程路由地址,需登录部分
 */
import Layout from '../components/Layout';
import ErrorPage from '../pages/error';
import HomePage from '../pages/home';
import ProductPage from '../pages/product';

const mainRoutes = {
  path: '/',
  element: <Layout />,
  errorElement: <ErrorPage />,
  children: [
    {
      title: '',
      path: '',
      element: <HomePage />,
    },
    {
      path: 'product',
      element: <ProductPage />,
    },
  ],
};

export default mainRoutes;
