import { createBrowserRouter, Outlet } from 'react-router-dom';

import {
  HomePageContainer,
  LandingPageContainer,
  LoginPageContainer,
} from '../containers';
import { MainLayout } from '../components/templates';
import ProtectedRoute from './ProtectedRoute.component';
import PublicRoute from './PublicRoute.component';

const Router = createBrowserRouter([
  {
    element: (
      <PublicRoute>
        <Outlet />
      </PublicRoute>
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
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
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
  {
    element: (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    // errorElement: <ErrorBoundary />,
    children: [
      {
        path: '/landing',
        Component: LandingPageContainer,
        // errorElement: <ErrorBoundary />,
      },
    ],
  },
]);

export default Router;
