import React from 'react';
import { Link , NavLink } from "react-router-dom";
import logo from "../images/logo.png";

const NavBar = () => {
    return (
        <>
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-11 col-lg-10 mx-auto">
                        <nav className="navbar navbar-expand-lg p-0">
                            <div className="container-fluid">
                                <Link className="navbar-brand" to="/"><img src={logo} alt="logo"/> </Link>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <NavLink exact="true" className="nav-link" aria-current="page" to="/" end>Home</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink exact="true" className="nav-link" aria-current="page" to="/service">Services</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink exact="true" className="nav-link" aria-current="page" to="/about">About</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink exact="true" className="nav-link" aria-current="page" to="/contact">Contact</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>

        </>
    )
}

export default NavBar;