import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import TheDisplay from "./TheDisplay";
import TheForm from "./TheForm";

function App() {
  const [name, setName] = useState("Shane");

  function handleSubmit(e) {
    e.preventDefault();
    setName(e.target.name.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <TheDisplay displayName={name} />
        <TheForm handleSubmit={handleSubmit} />
      </header>
    </div>
  );
}

export default App;
