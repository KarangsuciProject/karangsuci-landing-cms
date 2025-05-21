export interface IFormInput {
  email: string;
  password: string;
  isStoreCredentials: boolean;
}

export interface IAuthState {
  auth: {
    error: string | null;
    user: string | null;
    isLoggedIn: boolean;
    loading: boolean;
  };
}
