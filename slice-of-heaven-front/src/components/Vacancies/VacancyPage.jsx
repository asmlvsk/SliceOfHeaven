import React from 'react';
import styles from './VacancyPage.module.css';
import VCard from './VacancyCard/VCard';

import Dostawca from '../../assets/deliveryPic.jpg';
import Kelnerka from '../../assets/waitress.jpg';
import Pomoc from '../../assets/kitchenHelp.jpg';

const VacancyPage = (props) =>{

    return<div className={styles.body}>
        <div className={styles.title}>Dołącz do zespołu Slice of Heaven!</div>
        <div className={styles.items}>
            <VCard 
                title={"Dostawca pizzy"} 
                pic={Dostawca}/>
            <VCard 
                title={"Kelnerka"}
                pic={Kelnerka}/>
            <VCard 
                title={"Pomoc kuchenna"}
                pic={Pomoc}/>
            </div>
    </div>

}

export default VacancyPage;