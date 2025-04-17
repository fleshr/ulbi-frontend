import { FC, PropsWithChildren } from "react";
import { createPortal } from "react-dom";

interface PortalProps extends PropsWithChildren {
  container?: HTMLElement;
}

export const Portal: FC<PortalProps> = ({
  children,
  container = document.body,
}) => {
  return createPortal(children, container);
};
