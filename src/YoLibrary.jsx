import NavBar from './NavBar'
import Banner from './Banner'
import About from './About'

const YoLibrary = () => {
	const featuresName = 'Browse';
	const featureName = 'library';
	const subtitle = 'ABOUT YO LIBRARY'
	const featureDescription = 'Yo Africa’s Library is your go-to resource for health knowledge and natural remedies. ' +
                           'Explore a wide range of medicinal plants and their uses in the Nursery, find effective ' +
                           'home remedies for common ailments, and stay informed with up-to-date health news. ' +
                           'The Library is designed to empower you with the knowledge to manage your health naturally and effectively.';



	const features = ["nursery", "remedies"];

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
      <div id="features" style={{display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap:"3em" , paddingTop: "2em"}}>
      <ArtContents />
      <ArtContents />
      <ArtContents /></div>

    </>
  );

};

export	default	YoLibrary;