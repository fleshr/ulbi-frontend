import { rtkApi } from "@/shared/api";
import type { Notification } from "../model/types/notification";

const notificationApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getNofigications: build.query<Notification[], undefined>({
      query: () => ({ url: "notifications" }),
    }),
  }),
});

export const useGetNofigicationsQuery =
  notificationApi.useGetNofigicationsQuery;
