import React from 'react';
import styles from './VCard.module.css';

const VCard = (props) =>{

    return<div className={styles.body}>
        <div className={styles.vac__container}>

            <img className={styles.vac__picture} src={props.pic} alt="" />

            <div className={styles.vac__infoBlock}>
                <div className={styles.vac__infoTitle}>{props.title}</div>
                <div className={styles.vac__infoDesc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, cumque.</div>
            </div>

            <button className={styles.vac__infoButton}>Wyslać</button>

        </div>
    </div>

}

export default VCard;