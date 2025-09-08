import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Router from "./routes/Router.jsx";

  // index.html 의 root 에 접근
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router />
  </StrictMode>
);
