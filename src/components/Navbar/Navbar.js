import React, { useState } from "react";
import { MobileMenu, NavLink } from "./components";
import "./Navbar.css";

const Navbar = () => {
  const [links, setLinks] = useState([
    { id: 1, name: "Home" },
    { id: 2, name: "About" },
    { id: 3, name: "Contact" },
    { id: 4, name: "Blog" },
    { id: 5, name: "Careers" },
  ]);
  const [showMobile, setShowMobile] = useState(false);
  return (
    <div className="navbar">
      <img src="./images/logo.svg" alt="img" />
      <ul className="nav-links">
        {links.map((l) => (
          <NavLink key={l.id} link={l} />
        ))}
      </ul>
      <div className="nav-column">
        <div className="burger-icon-div">
          <img
            onClick={() => setShowMobile(true)}
            className="burger-icon"
            src="./images/icon-hamburger.svg"
            alt=""
          />
        </div>
        <button className="btn invite-btn">Request Invite</button>
      </div>
      <MobileMenu
        showMobile={showMobile}
        setShowMobile={setShowMobile}
        links={links}
      />
    </div>
  );
};

export default Navbar;
