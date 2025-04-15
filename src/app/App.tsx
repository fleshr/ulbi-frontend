import { Link } from "react-router";
import { classNames } from "@/shared/lib";
import { useTheme } from "./providers/ThemeProvider";
import { AppRouter } from "./providers/AppRouter";
import "./styles/index.scss";
import { NavBar } from "@/widgets/NavBar";

export const App = () => {
  const { theme, toogleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <NavBar />
      <AppRouter />
      <button onClick={toogleTheme}>Toogle theme</button>
    </div>
  );
};
