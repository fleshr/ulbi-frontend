import { userActions, userSelectors } from "@/entities/User";
import { useAppDispatch, useAppSelector } from "@/shared/model";
import { Navbar } from "@/widgets/Navbar";
import { Sidebar } from "@/widgets/Sidebar";
import { Suspense, useEffect } from "react";
import { AppRouter } from "./providers/AppRouter";
import "./styles/index.scss";

export const App = () => {
  const dispatch = useAppDispatch();
  const isUserInitialized = useAppSelector(userSelectors.getUserInitialized);

  useEffect(() => {
    dispatch(userActions.initUser());
  }, [dispatch]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Navbar />
      <div className="content">
        <Sidebar />
        {isUserInitialized && <AppRouter />}
      </div>
    </Suspense>
  );
};
