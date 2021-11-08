import React from 'react';
import filterStyles from './FilterPanel.module.css';

import { FaPizzaSlice } from 'react-icons/fa';
import { FaCarrot } from 'react-icons/fa';
import { BiWater } from 'react-icons/bi';
import { FaWineBottle } from 'react-icons/fa';
import { GiSaucepan } from 'react-icons/gi';

const FilterPanel = () =>{
    return<div className={filterStyles.filter__panelBody}>
        <div className={filterStyles.filter__container}>
            <div className={filterStyles.filter__item}>
                <FaPizzaSlice className={filterStyles.filter__itemIcon}/>
                <div>Pizza</div>
            </div>
            <div className={filterStyles.filter__item}>
                <FaCarrot className={filterStyles.filter__itemIcon}/>
                <div>Pizze WEGAŃSKIE</div>
            </div>
            <div className={filterStyles.filter__item}>
                <BiWater className={filterStyles.filter__itemIcon}/>
                <div>Zapieczone makarony</div>
            </div>
            <div className={filterStyles.filter__item}>
                <FaWineBottle className={filterStyles.filter__itemIcon}/>
                <div>Napoje</div>
            </div>
            <div className={filterStyles.item}>
                <GiSaucepan className={filterStyles.filter__itemIcon}/>
                <div>Sosy</div>
            </div>
        </div>
    </div>

}

export default FilterPanel;