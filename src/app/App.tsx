import { classNames } from "@/shared/lib";
import { useTheme } from "./providers/ThemeProvider";
import { AppRouter } from "./providers/AppRouter";
import "./styles/index.scss";
import { Navbar } from "@/widgets/Navbar";

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <AppRouter />
    </div>
  );
};
