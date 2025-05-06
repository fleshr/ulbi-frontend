import { FeatureFlags } from "@/shared/types";
import type { UserRole } from "../../const/userRole";
import { JsonSettings } from "./jsonSettings";

export interface User {
  id: string;
  username: string;
  avatar?: string;
  roles?: UserRole[];
  featureFlags?: FeatureFlags;
  jsonSettings?: JsonSettings;
}

export interface UserState {
  user: User | null;
  _initialized: boolean;
}
