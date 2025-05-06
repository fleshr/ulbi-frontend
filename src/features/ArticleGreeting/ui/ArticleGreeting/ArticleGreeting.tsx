import { saveJsonSettings, userSelectors } from "@/entities/User";
import { useAppDispatch, useAppSelector } from "@/shared/model";
import { Drawer, Modal, Text } from "@/shared/ui";
import { type FC, memo, useCallback, useState } from "react";
import { BrowserView, MobileView } from "react-device-detect";

export const ArticleGreeting: FC = memo(function ArticleGreeting() {
  const disaptch = useAppDispatch();
  const { isArticlesPageWasOpened } = useAppSelector(
    userSelectors.getJsonSettings,
  );
  const [isOpened, setIsOpened] = useState(!isArticlesPageWasOpened);

  const handleClose = useCallback(() => {
    setIsOpened(false);
    void disaptch(saveJsonSettings({ isArticlesPageWasOpened: true }));
  }, [disaptch]);

  const content = <Text title="123" text="123" />;

  return (
    <>
      <BrowserView>
        <Modal isOpen={isOpened} onClose={handleClose}>
          {content}
        </Modal>
      </BrowserView>
      <MobileView>
        <Drawer isOpen={isOpened} onClose={handleClose}>
          {content}
        </Drawer>
      </MobileView>
    </>
  );
});
