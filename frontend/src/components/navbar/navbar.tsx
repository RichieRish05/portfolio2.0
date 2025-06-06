import "./navbar.css";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar() {
  const location = useLocation();
  const getLocation = (path: String) =>
    location.pathname === path ? "highlighted" : "";
  const [pillStyle, setPillStyle] = useState({});

  const pillOffset: Record<string, React.CSSProperties> = {
    "/": { transform: "translateX(0%)" },
    "/projects": { transform: "translateX(105%)" },
    "/contact": { transform: "translateX(222.5%)" },
  };

  // On each page switch, reset the pill's location
  useEffect(() => {
    setPillStyle(pillOffset[location.pathname]);
  }, [location.pathname]);

  return (
    <nav className="navbar">
      <ul className="nav-links">
        <div className="pill" style={pillStyle}></div> {/* Pill */}
        <li className={getLocation("/")}>
          <Link to="/">Home</Link>
        </li>
        <li className={getLocation("/projects")}>
          <Link to="/projects">Projects</Link>
        </li>
        <li className={getLocation("/contact")}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
