import React, {useState} from "react";
import PropTypes from 'prop-types'; 
import './Banner.css';

function Banner(){
    return(<div className="background-container">
        <div className="landing-text-container">
            <a href="../login/login.html" className="logo-link">
                <div className="name-container">
                    <p className="boldface">yo</p>
                    <p className="regular">africa</p>
                </div>
            </a>
            <p className="slogan">Yongamela Ikusasa Lakho</p>
        </div>
    </div>
)
}

// Default props
Banner.propTypes = {
}


export default Banner