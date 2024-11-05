import { createBrowserRouter, Outlet } from "react-router-dom";

import { ExampleContainer } from "../containers";

const Router = createBrowserRouter([
  {
    element: (
      //   <PublicRoute  />
      <Outlet />
    ),
    // errorElement: <ErrorBoundary />,
    children: [
      {
        path: "Example",
        Component: ExampleContainer,
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
        path: "/",
        Component: ExampleContainer,
        // errorElement: <ErrorBoundary />,
      },
    ],
  },
]);

export default Router;
