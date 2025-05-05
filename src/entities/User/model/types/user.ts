import { FeatureFlags } from "@/shared/types";
import type { UserRole } from "../../constants/userRole";

export interface User {
  id: string;
  username: string;
  avatar?: string;
  roles?: UserRole[];
  featureFlags?: FeatureFlags;
}

export interface UserState {
  user: User | null;
  _initialized: boolean;
}
