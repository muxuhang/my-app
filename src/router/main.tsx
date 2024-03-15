import React from 'react';
/**
 * @description 主进程路由地址,需登录部分
 */
import ErrorPage from '@src/pages/error';
import HomePage from '@src/pages/home';
import ProductPage from '@src/pages/product';
import { Layout } from '@src/components';
import '@src/main.scss'

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
