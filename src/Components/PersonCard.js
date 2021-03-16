import React from 'react';

import classes from './PersonCard.module.css'

const PersonCard = (props) =>  {


    return(
        <div className={classes.Profile}>
            <h3>Name: {props.name}</h3>
            <p>Gender: {props.gender}</p>
            <p>Age: {props.age}</p>
            <p>Like Count: <span className={classes.LikeCount}>{props.likeCount}</span></p>
            <button onClick={props.onLikeButtonClick} className={classes.LikeButton}>Like</button>
        </div>
        );
    
    
};

export default PersonCard;