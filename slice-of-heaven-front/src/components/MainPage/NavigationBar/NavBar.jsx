import { NavLink } from "react-router-dom";
import headerStyles from "./NavBar.module.css";
import Badge from '@material-ui/core/Badge';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCartRounded';
import {MdRestaurantMenu} from 'react-icons/md';
import {MdContacts} from 'react-icons/md';
import {MdWork} from 'react-icons/md';
import {MdLogin} from 'react-icons/md';

const NavBar = (props) => {

    return(
        <header className={headerStyles.header}>
            <div className={headerStyles.header__container}>
                <NavLink to="/" className={headerStyles.header__logo}>SLICE OF HEAVEN</NavLink>
                <nav className={headerStyles.header__nav}>

                    <NavLink to="/menu" className={headerStyles.header__nav_link}>
                        <MdRestaurantMenu className={headerStyles.header__nav_icon}/>
                        <div className={headerStyles.header__nav_item}>Menu</div>
                    </NavLink>

                    <NavLink to="/contact" className={headerStyles.header__nav_link}>
                        <MdContacts className={headerStyles.header__nav_icon}/>
                        <div className={headerStyles.header__nav_item}>Kontakt</div>
                    </NavLink>

                    <NavLink to="/vacancies" className={headerStyles.header__nav_link}>
                        <MdWork className={headerStyles.header__nav_icon}/>
                        <div className={headerStyles.header__nav_item}>Praca</div>
                    </NavLink>

                    <div>
                        {props.isAuth ? props.login : <NavLink to="/login" className={headerStyles.header__nav_link}>
                                <MdLogin className={headerStyles.header__nav_icon}/>
                                <div className={headerStyles.header__nav_item}>Konto</div>
                            </NavLink>}
                    </div>

                    <NavLink to="/cart" className={headerStyles.header__nav_link}>
                        <Badge className={headerStyles.header__nav_link} badgeContent={props.countCartItems} color="secondary">
                            <ShoppingCartIcon className={headerStyles.header__nav_icon}/>
                            <div className={headerStyles.header__nav_item}>Koszyk</div>
                        </Badge>
                    </NavLink>

                </nav>
            </div>
        </header>
    );
}

export default NavBar;