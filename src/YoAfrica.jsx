import { useState } from "react";
import  {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from './Home';
import YoTracker from "./YoTracker";
import YoLocator from "./YoLocator";
import YoLibrary from  "./YoLibrary";
// import Login from "./Login";
import Footer from "./Footer";
import './index.css'



const YoAfrica = () => {

    return(
        <Router>
            <>
                <Switch>
                    <Route path="/home">
                        <Home/>
                    </Route>
                    <Route path="/locator">
                        <YoLocator/>
                    </Route>
                    <Route exact path="/Symptom Tracker">
                        <YoTracker/>
                    </Route>
                    <Route exact path="/library">
                        <YoLibrary/>
                    </Route>
                    {/*<Route exact path="/login">
                        <Login/>
                    </Route>*/}
                </Switch >
                <Footer/>  
                
            </>
        </Router>
    );

};

export  default YoAfrica;

