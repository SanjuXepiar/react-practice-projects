import React, { useState } from "react";
import "../components/Navbar.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

//
const Navbar = () => {
  // const [toggle, setToggle] = useState(true);
  // const handleToggle = () => setToggle(!toggle);
  return (
    <navbar>
      <section className="navbarHeader">
        <Link to="/">
          <h1 className="navbarLogo">Sanju Sarkar</h1>
        </Link>
        <div className=" .navbarHeaderLinks">
          <ul style={{ display: "flex", gap: "4rem" }}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/project">Project</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>

        {/* <div className="toggleButtons" onClick={handleToggle}>
          {toggle ? <FaBars /> : <FaTimes />}
        </div> */}
      </section>
    </navbar>
  );
};

export default Navbar;
