import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { App } from "./App";
import "./styles/index.scss";
import { ThemeProvider } from "./theme/ThemeProvider";

const root = createRoot(document.getElementById("root")!);
root.render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
