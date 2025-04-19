export interface LoginState {
  username: string;
  password: string;
  isLoading: boolean;
  error?: string;
}

export interface LoginSchema {
  username: string;
  password: string;
}
