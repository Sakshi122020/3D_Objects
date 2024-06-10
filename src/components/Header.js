import React from "react";
import { Link } from "react-router-dom";
import "../css/Sketch.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="/images/WebsiteLogo.png" alt="Custom Designs" />
        <span>Custom Designs</span>
      </div>
      <nav>
        <Link to="/">Home Page</Link>
        <Link to="/workspace">WorkSpace</Link>
      </nav>
    </header>
  );
}

export default Header;
