import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import "./index.css";

import AppRouter from "./app/router/AppRouter";
import { store } from "./app/store/store";
import theme from "./styles/theme/theme";

import { NavigationProvider } from "./app/providers/NavigationProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <NavigationProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <AppRouter />
        </ThemeProvider>
      </NavigationProvider>
    </Provider>
  </StrictMode>,
);