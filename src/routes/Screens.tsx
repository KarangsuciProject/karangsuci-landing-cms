import { createBrowserRouter, Outlet } from 'react-router-dom';

import { LoginPageContainer } from '../containers';

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
      <Outlet />
    ),
    // errorElement: <ErrorBoundary />,
    children: [
      {
        path: '/',
        // errorElement: <ErrorBoundary />,
      },
    ],
  },
]);

export default Router;
