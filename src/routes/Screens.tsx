import { createBrowserRouter, Outlet } from 'react-router-dom';

import { HomePageContainer, LoginPageContainer } from '../containers';
import { MainLayout } from '../components/templates';

const Router = createBrowserRouter([
  {
    element: (
      //   <PublicRoute  />
      <Outlet />
    ),
    // errorElement: <ErrorBoundary />,
    children: [
      {
        path: 'login',
        Component: LoginPageContainer,
        // errorElement: <ErrorBoundary />,
      },
    ],
  },
  {
    element: (
      // <ProtectedRoute />,
      <MainLayout />
    ),
    // errorElement: <ErrorBoundary />,
    children: [
      {
        path: '/',
        Component: HomePageContainer,
        // errorElement: <ErrorBoundary />,
      },
    ],
  },
]);

export default Router;
