
import { useState } from "react";
import { NavLink } from "react-router";
import "../styles/Navbar.css";

import { FaHome, FaBars, FaTimes } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { IoMdContacts } from "react-icons/io";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => setMenuOpen(false);

    return (
        <nav className="navbar" aria-label="Main navigation">

            {/* Logo */}
            <div className="logo">
                <p className="logo-text">
                    BYD | <span>Build Your Dream.</span>
                </p>
            </div>

            {/* Hamburger Button */}
            <button
                className="hamburger"
                onClick={() => setMenuOpen((isOpen) => !isOpen)}
                aria-label="Toggle navigation menu"
                aria-expanded={menuOpen}
                aria-controls="primary-navigation"
            >
                {menuOpen ? <FaTimes /> : <FaBars />}
            </button>


            <ul id="primary-navigation" className={`nav-list ${menuOpen ? "active" : ""}`}>
              <li>
                <NavLink to="/" onClick={closeMenu}>
                    <span className="icon">
                        <FaHome />
                    </span>
                    Home
                </NavLink>
              </li>

              <li>
                <NavLink to="/about" onClick={closeMenu}>
                    <span className="icon">
                        <IoIosInformationCircleOutline />
                    </span>
                    About
                </NavLink>
              </li>

              <li>
                <NavLink to="/contact" onClick={closeMenu}>
                    <span className="icon">
                        <IoMdContacts />
                    </span>
                    Contact
                </NavLink>
              </li>

              <li><button className="bookbtn" type="button">Book Now</button></li>


            </ul>

        </nav>
    );
}

export default Navbar;
