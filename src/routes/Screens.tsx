import { createBrowserRouter, Outlet } from 'react-router-dom';

import { LoginPageContainer } from '../containers';

const Router = createBrowserRouter([
  {
    element: (
      // <ProtectedRoute />,
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
]);

export default Router;
