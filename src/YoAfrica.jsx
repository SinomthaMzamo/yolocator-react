import { useState } from "react";
import PropTypes from 'prop-types';
import Page from './Page';
import Button from "./Button";
import CheckBoxes from "./CheckBoxes";
import NavBar from "./NavBar";

const YoLocator = () => {

    const institutions = 'Institutions';
    const specialists = 'Specialists';

    const institutionCategories = ["Clinics", "Hospitals", "Pharmacies"];
    const specialistCategories = [
    "GP", "Traditional Healer", 
    "Psychologist/Psychiatrist", 
    "OB/GYN", "Orthodontist/Dentist"
    ]


    // usestate to track which checkboxes to display
    const [displayedCategory, setDisplayedCategory] = useState(null);

    // Update the state with the text of the button that was clicked
    const handleButtonClick = (category) => {
    console.log('Button clicked:', category)
    setDisplayedCategory(category);

    };



    return(
        <>
            <div className="searchButtonsAndBar">
                <div className='filterButtons'>
                    <Button 
                    text={institutions} 
                    idleColour='#ffffff' 
                    hoverColour='#e3e3e3' 
                    textColour='#303030'
                    onClick={() => handleButtonClick(institutions)} ></Button>     
                    <Button
                    text={specialists}
                    idleColour='#2c2c2c'
                    hoverColour='#1e1e1e' 
                    textColour='#f5f5f5'
                    onClick={() => handleButtonClick(specialists)}
                    ></Button>
                </div>
                <input type="search" className='locatorSearchBar' placeholder='Search'/>
            </div>
            {/* Conditionally display checkboxes based on the button's text */}
            {displayedCategory === institutions && <CheckBoxes titles={institutionCategories} />}
            {displayedCategory === specialists && <CheckBoxes titles={specialistCategories} />}
            <div className='map'>
                <iframe src="https://my.atlist.com/map/fd023123-a763-495a-8fab-407edf79ff0b/?share=true" allow="geolocation 'self' https://my.atlist.com" width="100%" height="600px" loading="lazy" frameborder="0" scrolling="no" allowfullscreen id="atlist-embed"></iframe>  
            </div>
        </>
    );
}

const YoAfrica = () => {

    const [currentPage, setCurrentPage] = useState('locator');

    const handleNavClick = (page) => {
        setCurrentPage(page);
    };

    const pageConfig = {
        locator: {
          feature: 'find',
          features: ['Institutions', 'Specialists'],
          mainContent: YoLocator,
        },
    };

    const { feature, features, mainContent: MainContent } = pageConfig[currentPage];

    return(
        <>  
            <NavBar feature={feature} features={features}></NavBar>
            <MainContent></MainContent>
            <Page id="home" feature="services" features={['Yo Library', 'Yo Locator', 'Symptom Tracker']}></Page>
            <Page id="library" feature="browse" features={["Nursery", "Home Remedies"]}></Page>
            <Page id="locator" feature="find" features={["Institutions", "Specialists"]}></Page>
            <Page id="symptomTracker" feature="services" features={["Yo Tracker", "Chat Bot"]}></Page>
        </>
    );

};

