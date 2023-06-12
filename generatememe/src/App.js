import logo from "./logo.svg";
import "./style.css";
import React from "react";
import Header from "./components/Header";
import Meme from "./components/Meme";

function App() {
  return (
    <div>
      <Header />
      <Meme />
    </div>
  );
}

export default App;
