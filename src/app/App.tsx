import { AppRouter } from "./providers/AppRouter";
import { Navbar } from "@/widgets/Navbar";
import { Sidebar } from "@/widgets/Sidebar";
import { Button, Modal, Portal } from "@/shared/ui";
import { useState } from "react";
import "./styles/index.scss";

export const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Navbar />
      <div className="content">
        <Sidebar />
        <div className="content-wrapper">
          <AppRouter />
          <Button onClick={() => setIsOpen(true)}>MODAL</Button>
          <Portal>
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
              {`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, nemo
              provident! Repudiandae quasi qui saepe adipisci doloribus ut
              nihil, laboriosam nobis quod, architecto totam eius eum blanditiis
              similique inventore assumenda?`}
            </Modal>
          </Portal>
        </div>
      </div>
    </>
  );
};
