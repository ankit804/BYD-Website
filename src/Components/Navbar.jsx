
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
        <nav className="navbar">

            {/* Logo */}
            <div className="logo">
                <h1 className="logo-text">
                    BYD | <span>Build Your Dream.</span>
                </h1>
            </div>

            {/* Hamburger Button */}
            <button
                className="hamburger"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle navigation menu"
                aria-expanded={menuOpen}
            >
                {menuOpen ? <FaTimes /> : <FaBars />}
            </button>

            {/* Navigation Links */}
            <ul className={`nav-list ${menuOpen ? "active" : ""}`}>

                <NavLink to="/" onClick={closeMenu}>
                    <span className="icon">
                        <FaHome />
                    </span>
                    Home
                </NavLink>

                <NavLink to="/about" onClick={closeMenu}>
                    <span className="icon">
                        <IoIosInformationCircleOutline />
                    </span>
                    About
                </NavLink>

                <NavLink to="/contact" onClick={closeMenu}>
                    <span className="icon">
                        <IoMdContacts />
                    </span>
                    Contact
                </NavLink>

            </ul>

        </nav>
    );
}

export default Navbar;
