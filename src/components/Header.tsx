import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo1.svg";

const Header: React.FC = () => {
  return (
    <header style={headerStyle}>
      <div style={logoStyle}>
        <Link to="/">
          <img src={logo} alt="Logo" style={logoImageStyle} />
        </Link>
      </div>
      <nav style={navStyle}>
        <ul style={navListStyle}>
          <li style={navItemStyle}>
            <Link to="/projects" style={linkStyle}>
              Projects
            </Link>
          </li>
          <li style={navItemStyle}>
            <Link to="/about" style={linkStyle}>
              About
            </Link>
          </li>
          <li style={navItemStyle}>
            <Link to="/contact" style={linkStyle}>
              Contact
            </Link>
          </li>
        </ul>
        <div style={actionButtonsStyle}>
          <Link to="/blog">
            <button style={actionButtonStyle}>Blog</button>
          </Link>
          <Link to="/get-in-touch">
            <button style={actionButtonStyle}>Get in Touch</button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

// Styles
const headerStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px 20px",
  backgroundColor: "#000",
  color: "#fff",
};

const logoStyle: React.CSSProperties = {
  backgroundColor: "#333", // same gray as buttons
  borderRadius: "4px", // soft rounding
  padding: "6px", // space around logo
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "20px",
  width: "30px",
};

const logoImageStyle: React.CSSProperties = {
  height: "25px",
  width: "auto",
  objectFit: "contain",
  display: "block",
  filter: "invert(1)",
};

const navStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flex: 3,
};

const navListStyle: React.CSSProperties = {
  display: "flex",
  listStyleType: "none",
  margin: 0,
  padding: 0,
};

const navItemStyle: React.CSSProperties = {
  margin: "0 10px",
};

const linkStyle: React.CSSProperties = {
  color: "#abc",
  textDecoration: "none",
};

const actionButtonsStyle: React.CSSProperties = {
  display: "flex",
};

const actionButtonStyle: React.CSSProperties = {
  marginLeft: "10px",
  padding: "8px 12px",
  backgroundColor: "#333",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};

export default Header;
