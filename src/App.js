import React from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";

import "./index.css";
import Home from "./pages/Home";
import ChatRoom from "./pages/ChatRoom";

const Routes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/:roomId", element: <ChatRoom /> },
  ]);
  return routes;
};

function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;
