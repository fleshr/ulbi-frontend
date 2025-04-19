import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "@/app/App";
import { ThemeProvider } from "@/app/providers/ThemeProvider";
import "@/shared/config/i18n/i18n";
import { StoreProvider } from "./app/providers/StoreProvider/ui/StoreProvider";

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
