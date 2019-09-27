import React from 'react'
import NavigationLink from "./NavigationLink/NavigationLink";
import classes from './Navigation.module.css';

const Navigation = (props) => {
    return (
       <ul className={classes.Navigation}>
           <NavigationLink path='/profile' caption="Profile"/>
           <NavigationLink path='/portfolio' caption="Portfolio"/>
       </ul>
    );
};


export default Navigation;
