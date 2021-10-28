import React from 'react';
import Footer from '../Footer/Footer';
import CardContainer from './Cards/CardContainer';
import main from './Menu.module.css';

const Menu = () =>{
    return<div className={main.body}>
        <CardContainer/>
        <Footer/>
    </div>

}

export default Menu;