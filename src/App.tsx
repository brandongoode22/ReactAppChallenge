import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Monsters from "./Components/Monsters";
import Homepage from "./Components/Homepage";

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Homepage />
      </BrowserRouter>
    </div>
  );
};

export default App;
