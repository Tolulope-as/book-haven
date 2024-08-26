import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import { Link as ScrollLink, scroller } from 'react-scroll'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function Navbar() {
    const navigate = useNavigate();

    const handleScrollToCategories = () => {
        navigate('/');  // Navigate to the Home page
        scroller.scrollTo('categories', {
            smooth: true,
            duration: 500,
        });
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg sticky-top bg-color">
                <div className="container-fluid">
                    <div className="logo ms-3">
                        <i className="bi bi-book-half logo-icon"></i>
                        <a className="navbar-brand" href="#">BookHaven</a>
                    </div>

                    <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon outline-0"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                            <li className="nav-item mx-3">
                                <Link className="nav-link fw-bold" to="/">Home</Link>
                            </li>
                            <li className="nav-item mx-3">
                                <span 
                                    onClick={handleScrollToCategories} 
                                    className="nav-link fw-bold"
                                    style={{ cursor: 'pointer' }}
                                >
                                    Categories
                                </span>
                            </li>
                            <li className="nav-item mx-3">
                                <Link className="nav-link fw-bold" to="/cart">Cart</Link>
                            </li>
                           
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
