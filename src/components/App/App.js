import React from "react";
import Inputs from "../Inputs/Inputs";
import Main from "../../containers/Main/Main";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h3>Animal Rescue</h3>
        <Inputs />
        <Main />
      </header>
    </div>
  );
}

export default App;
