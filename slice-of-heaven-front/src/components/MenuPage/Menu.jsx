import React from 'react';
import CardContainer from './Cards/CardContainer';
import main from './Menu.module.css';

const Menu = () =>{
    return<div className={main.body}>
        <CardContainer/>
    </div>

}

export default Menu;