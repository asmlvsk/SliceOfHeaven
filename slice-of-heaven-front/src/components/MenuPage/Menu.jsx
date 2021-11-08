import React from 'react';
import Footer from '../Footer/Footer';
import CardContainer from './Cards/CardContainer';
import menuStyles from './Menu.module.css';
import bg from '../../assets/4532814.jpg';
import FilterPanelContainer from './FilterPanel/FilterPanelContainer';

const Menu = () =>{

    return<div className={menuStyles.menu__body}>
        <img className={menuStyles.menu__bg} src={bg} alt="" />
        <FilterPanelContainer/>
        <CardContainer/>
        <Footer/>
    </div>

}

export default Menu;