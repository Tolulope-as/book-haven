import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


function Footer() {
    return(
       <footer className="footer container-fluid p-4 text-center bg-dark">
        <div className="row">
        <div className="col-lg-3 col-md-6 p-4">
            <p className="footer-headings text-white">Socials</p>
            <p className="text-white-50">Buy Your Favourite novels at affordable prices here at Bookhaven.</p>
            <div className="socials">
                <i class="bi bi-envelope-fill mx-2 s-25px footer-icon"></i>
                <i class="bi bi-instagram mx-1 s-25px footer-icon "></i>
                <i class="bi bi-twitter-x mx-2 s-25px footer-icon"></i>
            </div>
        </div>
        <div className="col-lg-3 col-md-6 p-4">
            <p className="footer-headings text-white">Quick Link</p>
            <p className="text-white-50">Home</p>
            <p className="text-white-50">Categories</p>
            <p className="text-white-50">Cart</p>
        </div>
        <div className="col-lg-3 col-md-6 p-4">
        <p className="footer-headings text-white">Company</p>
            <p className="text-white-50">FAQ'S</p>
            <p className="text-white-50">Privacy Policy</p>
            <p className="text-white-50">Support</p>
        </div>
        <div className="col-lg-3 col-md-6 p-4">
        <p className="footer-headings text-white">
            Contact
        </p>
           <p className="text-white-50">Reeds Avenue California,USA.</p>
           <p className="text-white-50">+67 980 345</p>
           <p className="text-white-50">bookhaven@gmail.com</p>

        </div>
        </div>
        <hr className="white-rule" />
        <p className="text-white-50">@BookHaven,All rights reserved.</p>
       </footer>
    );
}

export default Footer;