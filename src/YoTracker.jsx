import { useState } from 'react'
import './YoTracker.css'
import SymptomsCard from './SymptomsCard'
import NavBar from './NavBar'
import Banner from './Banner'
import About from './About'


function YoTracker() {
  const featuresName = 'Quick Insights';
  const featureName = 'symptom tracker';
  const subtitle = 'ABOUT YO TRACKER'
  const featureDescription = 'Our Symptom Tracker provides valuable insights and recommendations ' +
                            'based on your symptoms. Use it to get quick health insights and ' +
                            'track your symptoms effectively.';


  const tracker = 'Symptom Tracker';
  const chatBot = 'ChatBot';

  const features = [tracker, chatBot];

  const ArtContents = () => {
    return(<div style={{ backgroundColor: "#c1a187", height: "350px", width: "auto", borderRadius: "12px" }}></div>
    );
  };
    





  return (
    <>
      <NavBar feature={featuresName} features={features}></NavBar>
      <Banner/>
      <div id="about">
      <About  featureName={featureName} subtitle={subtitle} featureDescription={featureDescription} art={ArtContents}>
      </About></div>
      <div id="features" style={{paddingTop: "2em"}}>
      <SymptomsCard /></div>
      
      


    </>
  )
}

export default YoTracker
