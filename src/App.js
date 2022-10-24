import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Users from "./components/Users";
import ErrorPage from "./components/ErrorPage";

import Home from "./components/Home";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/users/page/:page" element={<Users />} />
          <Route exact path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
