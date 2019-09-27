import React from 'react';
import classes from './Layout.module.css';
import Profile from "./Pages/Profile/Profile";

const Layout = (props) => {
    return (
        <div className={classes.Layout}>
        <Profile/>
        </div>
    );
};

export default Layout;
