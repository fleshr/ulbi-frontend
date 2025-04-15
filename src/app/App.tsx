import { classNames } from "@/shared/lib";
import { useTheme } from "./providers/ThemeProvider";
import { AppRouter } from "./providers/AppRouter";
import "./styles/index.scss";
import { Navbar } from "@/widgets/Navbar";
import { Sidebar } from "@/widgets/Sidebar";

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <div className="content">
        <Sidebar />
        <div className="content-wrapper">
          <AppRouter />
        </div>
      </div>
    </div>
  );
};
