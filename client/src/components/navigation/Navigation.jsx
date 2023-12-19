import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <div className="navigation-container">
      <span><Link to={"/"}>Home</Link></span>
      <span><Link to={"/login"}>Login</Link></span>
      <span><Link to={"/register"}>Register</Link></span>
    </div>
  );
}

export default Navigation;

