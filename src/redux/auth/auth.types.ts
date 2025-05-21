export interface ILoginState {
  user: string | null;
  isLoggedIn: boolean;
  loading: boolean;
  error: string | null;
}

export interface ILoginData {
  email: string;
  password: string;
  isStoreCredentials: boolean;
}
