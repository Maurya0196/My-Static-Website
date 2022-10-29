import React from 'react';
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

const Footer = () => {
    return (
        <>
            <div id="footer">
                <div className="container-fluid py-4">
                    <div className="row">
                        <div className="col-10 mx-auto text-center">
                            <Link className="navbar-brand" to="/"><img src={logo} alt="logo" /> </Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>
                        <div className="text-white text-center pt-3"><span>©2022 <strong>Moreyeah</strong>. All Rights Reserved.</span></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer