import type { AxiosInstance } from "axios";

export interface ThunkOptions<T = string> {
  rejectValue: T;
  state: RootState;
  extra: { api: AxiosInstance };
}
