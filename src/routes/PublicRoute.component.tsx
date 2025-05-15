import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import type { RootState } from '../redux/store.type';

const PublicRoute = ({ children }: { children: React.ReactNode }) => {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
};

export default PublicRoute;
