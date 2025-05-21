import type { ILoginState } from './auth.types';

export default {
  logout: (state: ILoginState) => {
    state.user = null;
    state.isLoggedIn = false;

    localStorage.removeItem('authToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('isStoreCredentials');
  },
};
