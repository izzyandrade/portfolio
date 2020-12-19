import React, { useRef } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import NavBar from "./components/NavBar";

function App() {
  const scrollToDiv = (ref) => window.scrollTo(0, ref.current.offsetTop);
  const refBody = useRef();

  return (
    <>
      <Router>
        <NavBar click={() => scrollToDiv(refBody)} />
        <Header />
        <Body reference={refBody} />
      </Router>
    </>
  );
}

export default App;
