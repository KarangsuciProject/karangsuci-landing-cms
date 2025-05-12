import type { LoginState } from './auth.types';

export default {
  loginSuccess: (state: LoginState) => {
    state.user = 'john';
    state.isLoggedIn = true;
  },
  logout: (state: LoginState) => {
    state.user = null;
    state.isLoggedIn = false;
  },
};
