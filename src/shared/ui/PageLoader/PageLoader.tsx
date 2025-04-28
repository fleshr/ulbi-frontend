import { memo } from "react";
import { VStack } from "../Flex";
import { Spinner } from "../Spinner/Spinner";

export const PageLoader = memo(function PageLoader() {
  return (
    <VStack fullHeight align="center" justify="center">
      <Spinner />
    </VStack>
  );
});
