import type { FC } from "react";
import type { FlexProps } from "../Flex/Flex";
import { Flex } from "../Flex/Flex";

type HStackProps = Omit<FlexProps, "direction">;

export const HStack: FC<HStackProps> = ({ align = "center", ...props }) => {
  return <Flex direction="row" align={align} {...props} />;
};
