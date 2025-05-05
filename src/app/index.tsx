import { ThemeProvider } from "@/entities/Theme";
import "@/shared/config/i18n/i18n";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import { StoreProvider } from "./providers";

const root = createRoot(document.getElementById("root") as Element);
root.render(
  <StoreProvider>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StoreProvider>,
);
