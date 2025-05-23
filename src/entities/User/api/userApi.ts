import { rtkApi } from "@/shared/api";
import { JsonSettings } from "../model/types/jsonSettings";
import { User } from "../model/types/user";

interface SetJsonSettingsArgs {
  userId: string;
  jsonSettings: JsonSettings;
}

const userApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    setJsonSettings: build.mutation<User, SetJsonSettingsArgs>({
      query: ({ userId, jsonSettings }) => ({
        url: `/users/${userId}`,
        method: "PATCH",
        body: { jsonSettings },
      }),
    }),
    getUserData: build.query<User, string>({
      query: (userId) => ({
        url: `/users/${userId}`,
        method: "GET",
      }),
    }),
  }),
});

export const setJsonSettingsMutation =
  userApi.endpoints.setJsonSettings.initiate;

export const getUserDataQuery = userApi.endpoints.getUserData.initiate;
