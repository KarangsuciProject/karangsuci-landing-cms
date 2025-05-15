import type { LoginState } from './auth.types';

export default {
  logout: (state: LoginState) => {
    state.user = null;
    state.isLoggedIn = false;

    localStorage.removeItem('authToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('storeCredentials');
  },
};
