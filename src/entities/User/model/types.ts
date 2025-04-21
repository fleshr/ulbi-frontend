export interface User {
  id: string;
  username: string;
  avatar?: string;
}

export interface UserState {
  user: User | null;
  _initialized: boolean;
}
