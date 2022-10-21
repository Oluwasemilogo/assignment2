import React from "react";
import { Link, Outlet } from "react-router-dom";

function Contact() {
  return (
    <div>
      <Link to="select">
        <button>Select</button>
      </Link>
      <Link to="select">
        <button>Select</button>
      </Link>
      <Outlet />
    </div>
  );
}

export default Contact;
