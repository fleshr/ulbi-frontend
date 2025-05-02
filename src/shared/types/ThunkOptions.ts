import type { AxiosInstance } from "axios";

export interface ThunkOptions<T> {
  rejectValue: T;
  state: RootState;
  extra: { api: AxiosInstance };
}
