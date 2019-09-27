import React from 'react'
import classes from './Profile.module.css';
import myImg from '../../../../assets/me.png'

const Profile = (props) => {
    return (
        <React.Fragment>
            <div className={classes.Layout}>
            <h1 className={classes.h1}>PROFILE</h1>
            <hr className={classes.hr1}/>
        <img className={classes.myImg} src={myImg} alt="Me"/>
        <h2 className={classes.h2}>Ahmad Hddad</h2> <h3 className={classes.h3}>Software Developer</h3>
        <hr className={classes.hr2}/>
        <p className={classes.aboutME}>
            Hi, welcome to my page, I am an enthusiastic developer, I developed many projects and collaborate with others. I love working with other developers and writing clean maintainable code. Always keeping up with new technologies and improving my self. I have experience in many technologies and including front-end and back-end.

        </p>
            </div>
        </React.Fragment>
    );
};


export default Profile;
