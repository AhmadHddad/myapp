import React from 'react';
import classes from "./Portfolio.module.css";


import img1 from '../../../../assets/1.png'
import img2 from '../../../../assets/2.png'


// svgs
import arrow from '../../../../assets/UI/arrow.svg'
import ps from '../../../../assets/UI/brands/adobephotoshop.svg'
import angular from '../../../../assets/UI/brands/angular.svg'
import react from '../../../../assets/UI/brands/react.svg'
import firebase from '../../../../assets/UI/brands/firebase.svg'
import js from '../../../../assets/UI/brands/javascript.svg'
import dotNet from '../../../../assets/UI/brands/dot-net.svg'
import php from '../../../../assets/UI/brands/php.svg'
import mysql from '../../../../assets/UI/brands/mysql.svg'
import html5 from '../../../../assets/UI/brands/html5.svg'
import css3 from '../../../../assets/UI/brands/css3.svg'
import github from '../../../../assets/UI/brands/github.svg'


const Portfolio = props => {

    // Preparing slider code
    // --- START ---
    let description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";
    let listPortfolios = [
        {img: img1, title: "title 1", description: description, class: "class"},
        {img: img2, title: "title 2", description: description, class: "class"},
    ];

    let slids = listPortfolios.map(slid => {
        return (<div className={slid.class}>
            <img src={slid.img} alt={slid.title}/>
            <h2>{slid.title}</h2>
            <p>{slid.description}</p>
        </div>)
    });

    // --- END ---
    let brands = [
        {img: html5, label: 'html5', class: "brands"},
        {img: css3, label: 'css3', class: "brands"},
        {img: js, label: 'js', class: "brands"},
        {img: php, label: 'php', class: "brands"},
        {img: mysql, label: 'mysql', class: "brands"},
        {img: dotNet, label: 'dotNet', class: "brands"},
        {img: firebase, label: 'firebase', class: "brands"},
        {img: ps, label: 'ps', class: "brands"},
        {img: angular, label: 'angular', class: "brands"},
        {img: react, label: 'react', class: "brands"},

    ];
    brands = brands.map(s => {
        return (
            <img src={s.img} className={s.class} alt={s.label}/>
        );
    });

    return (
        <div className={classes.Layout}>
            <h1 className={classes.h1}>PROFILE</h1>
            <hr className={classes.hr0}/>
            <div id={classes.layout}>
                <hr className={classes.hr1}/>
                <img src={arrow} className={classes.arrow1} alt="Arrow"/>
                <div id={classes.portfolio}>
                    <div className={classes.square}>
                        <img src={img1} className={classes.sliderImage} alt="img"/>
                        <h2 className={classes.sliderTitle}> Title</h2>
                        <p className={classes.description}>{description}</p>
                    </div>
                    <img src={arrow} className={classes.arrow2} alt="Arrow"/>
                    <hr className={classes.hr2}/>
                </div>
            </div>
            <div className={classes.brands}>
                {brands}
            </div>
            <img src={github} alt="github" className={classes.github}/>
        </div>

    );
};


export default Portfolio;

