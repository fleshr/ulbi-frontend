import { classNames } from "@/shared/lib";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import type { ReactNode } from "react";
import { memo } from "react";
import { AppLink } from "../AppLink/AppLink";
import { Button } from "../Button/Button";
import { VStack } from "../Flex";
import styles from "./Dropdown.module.scss";

export interface DropdownItem {
  content?: ReactNode;
  href?: string;
  onClick?: () => void;
}

interface DropdownProps {
  className?: string;
  trigger: ReactNode;
  items: DropdownItem[];
}

export const Dropdown = memo(function Dropdown({
  className,
  trigger,
  items,
}: DropdownProps) {
  return (
    <Menu>
      <MenuButton className={classNames(styles.btn, {}, [className])}>
        {trigger}
      </MenuButton>
      <MenuItems anchor="bottom end" className={styles.items}>
        <VStack align="center">
          {items.map(({ onClick, content, href }, index) => {
            if (href) {
              return (
                <MenuItem key={index} as={AppLink} to={href}>
                  {content}
                </MenuItem>
              );
            }

            return (
              <MenuItem key={index} as={Button} onClick={onClick}>
                {content}
              </MenuItem>
            );
          })}
        </VStack>
      </MenuItems>
    </Menu>
  );
});
