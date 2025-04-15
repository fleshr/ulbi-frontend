import { Counter } from "./components/Counter";
import "./App.scss";
import { Link, Route, Routes } from "react-router";
import { MainPageLazy } from "./pages/MainPage/MainPageLazy";
import { AboutPageLazy } from "./pages/AboutPage/AboutPageLazy";
import { Suspense } from "react";

export const App = () => {
  return (
    <div className="app">
      <Link to="/">Main</Link>
      <Link to="/about">About</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPageLazy />} />
          <Route path="/about" element={<AboutPageLazy />} />
        </Routes>
      </Suspense>
      <Counter />
    </div>
  );
};
