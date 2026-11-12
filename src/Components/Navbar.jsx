import { NavLink } from "react-router";
import "../styles/Navbar.css";
import { FaHome } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { IoMdContacts } from "react-icons/io";



function Navbar() {
    return (<>
        <nav className="navbar">
            <div className="logo">
                <h1 className="logo-text">BYD | <span>Build Your Dream.</span></h1>
            </div>
            <ul className="nav-list">
                <NavLink to="/"><span>{<FaHome/>}</span>Home</NavLink >
                    <NavLink to="/about"><span className="icon">{<IoIosInformationCircleOutline/>}</span>About</NavLink >
                        <NavLink to="/contact"><span>{<IoMdContacts/>}</span>Contact</NavLink >
        </ul>
        </nav>
    </>)
}

export default Navbar;