import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Users from "./components/Users";
import ErrorPage from "./components/ErrorPage";
import Contact from "./components/Contact";
import Select from "./components/Select";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Navbar />} />
          <Route exact path="/users/page/:page" element={<Users />} />
          <Route exact path="/contact" element={<Contact />}>
            <Route exact path="select" element={<Select />} />
          </Route>
          <Route exact path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
