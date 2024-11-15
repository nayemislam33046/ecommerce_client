import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { MyContext } from "./Context/Context.jsx";
createRoot(document.getElementById("root")).render(
  <MyContext>
    <App />
  </MyContext>
);