export interface User {
  id: string;
  username: string;
}

export interface UserState {
  user: User | null;
}
