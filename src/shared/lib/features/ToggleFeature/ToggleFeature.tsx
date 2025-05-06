import type { FC, ReactElement } from "react";
import { FeatureFlags } from "../../../types";
import { getFeatureFlag } from "../featuresStore";

interface ToggleFeatureProps {
  name: keyof FeatureFlags;
  on: ReactElement;
  off: ReactElement;
}

export const ToggleFeature: FC<ToggleFeatureProps> = ({ name, on, off }) => {
  return getFeatureFlag(name) ? on : off;
};
