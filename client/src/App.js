import React from "react";
import "./resources/css/reset.css"
import "./resources/css/layout.css"
import "./resources/css/main.css"
import Header from "./view/layout/Header";
import AppRouter from "./AppRouter";

function App() {
  return (
    <div className="App">
      <Header />
      <AppRouter />
    </div>
  );
}

export default App;
