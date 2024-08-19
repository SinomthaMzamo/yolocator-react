import { useState } from 'react'
import './YoLocator.css'
import Button from './Button'
import CheckBoxes from './CheckBoxes'
import NavBar from './NavBar'
import Banner from './Banner'
import About from './About'

function YoLocator() {
  const featuresName = 'Find';
  const featureName = 'locator';
  const subtitle = 'ABOUT YO LOCATOR'
  const featureDescription = 'Gives you access to a comprehensive database ' + 
                            'of institutions and specialists best suited to' + 
                            'your needs and preferences. This feature connects ' + 
                            'you to the help you desire near you.'

  const institutions = 'Institutions';
  const specialists = 'Specialists';

  const features = [institutions, specialists];

  const institutionCategories = ["Clinics", "Hospitals", "Pharmacies"];
  const specialistCategories = [
    "GP", "Traditional Healer", 
    "Psychologist/Psychiatrist", 
    "OB/GYN", "Orthodontist/Dentist",
  ]


  // usestate to track which checkboxes to display
  const [displayedCategory, setDisplayedCategory] = useState(null);

  // Update the state with the text of the button that was clicked
  const handleButtonClick = (category) => {
    console.log('Button clicked:', category)
    setDisplayedCategory(category);

  };

  const ArtContents = () => {
    return(<div style={{ backgroundColor: "#c1a187", height: "350px", width: "auto" }}></div>
    );
  };
    





  return (
    <>
      <NavBar feature={featuresName} features={features}></NavBar>
      <Banner/>
      <div id="about">
      <About featureName={featureName} subtitle={subtitle} featureDescription={featureDescription} art={ArtContents}>
      </About></div>
      <div id="features" style={{paddingTop: "2em"}}>
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
	        <input type="search" className='locatorSearchBar' placeholder='Search Google Maps'/>
	      </div>
	      {/* Conditionally display checkboxes based on the button's text */}
	      {displayedCategory === institutions && <CheckBoxes titles={institutionCategories} />}
	      {displayedCategory === specialists && <CheckBoxes titles={specialistCategories} />}
	      <div className='map'>
	        <iframe src="https://my.atlist.com/map/fd023123-a763-495a-8fab-407edf79ff0b/?share=true" allow="geolocation 'self' https://my.atlist.com" width="100%" height="600px" loading="lazy" frameborder="0" scrolling="no" allowfullscreen id="atlist-embed"></iframe>  
	      </div>
      </div>
      


    </>
  )
}

export default YoLocator
