import React, { useState, useRef } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Body from "./components/Body";
import { CSSTransition } from "react-transition-group";

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

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default App;
