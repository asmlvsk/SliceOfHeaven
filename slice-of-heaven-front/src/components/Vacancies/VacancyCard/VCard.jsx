import React from 'react';
import vacStyles from './VCard.module.css';

const VCard = (props) =>{

    return<div className={vacStyles.vac__body}>
        <div className={vacStyles.vac__container}>

            <img className={vacStyles.vac__picture} src={props.pic} alt="" />

            <div className={vacStyles.vac__infoBlock}>
                <div className={vacStyles.vac__infoTitle}>{props.title}</div>
                <div className={vacStyles.vac__infoDesc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, cumque.</div>
            </div>

            <button className={vacStyles.vac__infoButton}>Wyslać</button>

        </div>
    </div>

}

export default VCard;