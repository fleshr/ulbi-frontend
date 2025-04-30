import type { FC } from "react";
import type { FlexProps } from "../Flex/Flex";
import { Flex } from "../Flex/Flex";

type VStackProps = Omit<FlexProps, "direction">;

export const VStack: FC<VStackProps> = (props) => {
  return <Flex direction="column" {...props} />;
};
