import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "../src/router";

function App() {
  return (
    <Router>
      Xin chào thanh tâm
      <AppRoutes />
    </Router>
  );
}

export default App;
