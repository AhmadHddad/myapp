import React from 'react'
import {Link} from "react-router-dom";
import classes from './NavigationLink.module.css';

const NavigationLink = (props) => {
    return (
        <li className={classes.NavigationItem} style={props.style}>
        <Link onClick={props.click} to={props.path} >{props.caption}</Link>
        </li>
    );
};

export default NavigationLink;
