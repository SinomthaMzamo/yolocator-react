import { useState } from "react";
import PropTypes from 'prop-types';
import './About.css'

const About = ({featureName, subtitle, featureDescription, art:ArtComponent}) => {
    return(
        <>
            <div className="aboutUsContainer">
                <div className="nameContainerBig">
                    <p className="boldface">yo</p>
                    <p className="featureName">{featureName}</p>
                </div>
                <div className="sectionN">
                    <div className="heading" style={{border: "none", padding: "0"}}>
                        <h2 className="boldfaceSubtitle">{subtitle}</h2>
                    </div>
                    <div className="aboutMessage">
                        <p className="featureDescription">{featureDescription}</p>
                        <ArtComponent></ArtComponent>
                    </div>
                </div>
            </div>
        </>
        // title
        // description
        // art
    );
};

// Define propTypes
About.propTypes = {
    featureName: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    featureDescription: PropTypes.string.isRequired,
    art: PropTypes.elementType.isRequired,
  };

export default About;