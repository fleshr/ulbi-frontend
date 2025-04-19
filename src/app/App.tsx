import { AppRouter } from "./providers/AppRouter";
import { Navbar } from "@/widgets/Navbar";
import { Sidebar } from "@/widgets/Sidebar";
import "./styles/index.scss";
import { useAppDispatch } from "@/shared/model";
import { useEffect } from "react";
import { initUser } from "@/entities/User";

export const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(initUser());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <div className="content">
        <Sidebar />
        <div className="content-wrapper">
          <AppRouter />
        </div>
      </div>
    </>
  );
};
