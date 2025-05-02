import { App } from "@/app/App";
import { StoreProvider, ThemeProvider } from "@/app/providers";
import "@/shared/config/i18n/i18n";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

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
