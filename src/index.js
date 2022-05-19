import App from "./App";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { makeServer } from "./server";
import { store } from "app/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { myNewTheme, theme } from "styles/theme";
import "./index.css";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
// Call make Server
makeServer();

console.log(theme.config.initialColorMode);
root.render(
  <StrictMode>
    <Provider store={store}>
      <ChakraProvider
        theme={myNewTheme}
        initialColorMode={theme.config.initialColorMode}
      >
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ChakraProvider>
    </Provider>
  </StrictMode>
);
