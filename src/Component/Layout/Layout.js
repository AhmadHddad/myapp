import React, { useState} from 'react';
import classes from './Layout.module.css';
import {Route,Redirect} from 'react-router-dom'

import Portfolio from "./Pages/Portfolio/Portfolio";
import Profile from "./Pages/Profile/Profile";
import Navigation from "../Navigation/Navigation";
const Layout = (props) => {

    // const [showState, setShowState] = useState(false);

    return (
        <div>
            <Redirect to="/profile"/>
            <Route component={Profile} path='/profile' exact/>
            <Route component={Portfolio} path="/portfolio" />
            <Navigation/>
        </div>
    );
};

export default Layout;