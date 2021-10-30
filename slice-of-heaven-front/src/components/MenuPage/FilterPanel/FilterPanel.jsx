import React from 'react';
import styles from './FilterPanel.module.css';

import { FaPizzaSlice } from 'react-icons/fa';
import { FaCarrot } from 'react-icons/fa';
import { BiWater } from 'react-icons/bi';
import { FaWineBottle } from 'react-icons/fa';
import { GiSaucepan } from 'react-icons/gi';

const FilterPanel = () =>{
    return<div className={styles.panelBody}>
        <div className={styles.container}>
            <div className={styles.item}>
                <FaPizzaSlice className={styles.itemIcon}/>
                <div>Pizza</div>
            </div>
            <div className={styles.item}>
                <FaCarrot className={styles.itemIcon}/>
                <div>Pizze WEGAŃSKIE</div>
            </div>
            <div className={styles.item}>
                <BiWater className={styles.itemIcon}/>
                <div>Zapieczone makarony</div>
            </div>
            <div className={styles.item}>
                <FaWineBottle className={styles.itemIcon}/>
                <div>Napoje</div>
            </div>
            <div className={styles.item}>
                <GiSaucepan className={styles.itemIcon}/>
                <div>Sosy</div>
            </div>
        </div>
    </div>

}

export default FilterPanel;