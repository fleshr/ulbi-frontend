import { FeatureFlags } from "@/shared/types";
import { getFeatureFlag } from "./featuresStore";

interface ToggleFeatureArgs<OnReturn, OffReturn> {
  name: keyof FeatureFlags;
  on: () => OnReturn;
  off: () => OffReturn;
}

export const toggleFeature = <OnReturn, OffReturn>({
  name,
  on,
  off,
}: ToggleFeatureArgs<OnReturn, OffReturn>) => {
  return getFeatureFlag(name) ? on() : off();
};
