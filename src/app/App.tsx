import { Link, Route, Routes } from "react-router";
import { Suspense } from "react";
import { MainPageLazy } from "@/pages/MainPage";
import { AboutPageLazy } from "@/pages/AboutPage";
import { classNames } from "@/shared/lib";
import { useTheme } from "./providers/ThemeProvider";
import "./styles/index.scss";

export const App = () => {
  const { theme, toogleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toogleTheme}>Toogle theme</button>
      <Link to="/">Main</Link>
      <Link to="/about">About</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPageLazy />} />
          <Route path="/about" element={<AboutPageLazy />} />
        </Routes>
      </Suspense>
    </div>
  );
};
