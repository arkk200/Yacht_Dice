import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Provider from "./providers/Provider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider>
    <App />
  </Provider>
);
