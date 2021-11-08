import React from 'react';
import Footer from '../Footer/Footer';
import CardContainer from './Cards/CardContainer';
import main from './Menu.module.css';
import bg from '../../assets/4532814.jpg';
import FilterPanelContainer from './FilterPanel/FilterPanelContainer';

const Menu = (props) =>{

    return<div className={main.body}>
        <img className={main.bg} src={bg} alt="" />
        <FilterPanelContainer/>
        <CardContainer/>
        <Footer/>
    </div>

}

export default Menu;