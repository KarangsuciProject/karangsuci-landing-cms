export interface LoginState {
  user: string | null;
  isLoggedIn: boolean;
  loading: boolean;
  error: string | null;
}
