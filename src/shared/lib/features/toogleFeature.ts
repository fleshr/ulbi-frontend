import { FeatureFlags } from "@/shared/types";
import { getFeatureFlag } from "./featuresStore";

interface ToogleFeatureArgs<OnReturn, OffReturn> {
  name: keyof FeatureFlags;
  on: () => OnReturn;
  off: () => OffReturn;
}

export const toogleFeature = <OnReturn, OffReturn>({
  name,
  on,
  off,
}: ToogleFeatureArgs<OnReturn, OffReturn>) => {
  return getFeatureFlag(name) ? on() : off();
};
