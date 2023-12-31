import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import Porfolio from './pages/Portfolio';
import OrderPage from './pages/OrderPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
    errorElement: <ErrorPage/>
  },
  {
    path: '/portfolio',
    element: <Porfolio/>,
    errorElement: <ErrorPage/>
  },
  {
    path: '/order-page',
    element: <OrderPage/>,
    errorElement: <ErrorPage/>
  }
])

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)