import React, {useState} from "react";
import PropTypes from 'prop-types';
import './NavBar.css'

const NavBar  = ({feature, features}) => {
    return (
        <>
        <nav className="nav-bar">
            <input type="checkbox" id="menu-toggle"></input>
            <label htmlFor="menu-toggle" className="hamburger">&#9776;</label>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li className="dropdown">
                    <a href="#news">News</a>
                    <ul className="dropdown-content" id="news-links">
                        <li><a href="../news/news.html">Latest</a></li>
                        <li><a href="#remedies">All News</a></li>
                    </ul>
                </li>
                <li className="dropdown">
                    <a href="#features">{feature}</a>
                    <ul className="dropdown-content" id="feature-links">
                        {features.map((aFeature) => (
                            <li key={aFeature}><a href="">{aFeature}</a></li>
                        ))}
                    </ul>
                </li>
            </ul>
        </nav>
        
        </>

    );

};


// Define propTypes
NavBar.propTypes = {
    feature: PropTypes.string.isRequired,
    features: PropTypes.array.isRequired,
}

export default NavBar;