import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
 const [dark, setDark] = useState(() =>
document.documentElement.classList.contains("dark")
);

 useEffect(() => {
 if (dark) document.documentElement.classList.add("dark");
else document.documentElement.classList.remove("dark");
 }, [dark]);

return (
 <nav className="navbar navbar-expand-lg navbar-light border-bottom"> {/* bg-white ඉවත් කර ඇත */}
 <div className="container-fluid position-relative">
 <Link className="navbar-brand fw-bold text-success" to="/">Portfolio</Link>

 <button
 className="navbar-toggler"
type="button"
 data-bs-toggle="collapse"
 data-bs-target="#navMenu"
aria-controls="navMenu"
 aria-expanded="false"
 aria-label="Toggle navigation"
 >
 <span className="navbar-toggler-icon" />
 </button>

 <div className="collapse navbar-collapse" id="navMenu">
 <ul className="navbar-nav ms-auto"> 
 <li className="nav-item">
 <NavLink className="nav-link" to="/">Home</NavLink>
 </li>
 <li className="nav-item">
<NavLink className="nav-link" to="/about">About</NavLink>
 </li>
 <li className="nav-item">
 <NavLink className="nav-link" to="/projects">Projects</NavLink>
 </li>
 <li className="nav-item">
 <NavLink className="nav-link" to="/contact">Contact</NavLink>
</li>
 </ul>
</div>
 <button
 className="btn btn-sm btn-outline-secondary ms-2 toggle-btn"
 onClick={() => setDark(!dark)}
 title="Toggle theme"
 >
{dark ? "🌙" : "☀️"}
</button>
 </div> </nav>
 );
};