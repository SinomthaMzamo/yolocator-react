import React, {useState} from "react";
import PropTypes from 'prop-types'; 
import  {Link} from 'react-router-dom';
import './Banner.css';

function Banner(){
    return(<div className="background-container">
        <div className="landing-text-container">
            <Link to="/login" className="logo-link">
                <div className="name-container">
                    <p className="bannerBoldface">yo</p>
                    <p className="regular">africa</p>
                </div>
            </Link>
            <p className="slogan">Yongamela Ikusasa Lakho</p>
        </div>
    </div>
)
}

// Default props
Banner.propTypes = {
}


export default Banner