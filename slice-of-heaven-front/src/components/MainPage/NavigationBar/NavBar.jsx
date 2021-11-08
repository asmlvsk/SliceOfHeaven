import { NavLink } from "react-router-dom";
import header from "./NavBar.module.css";
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCartRounded';

import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import WorkIcon from '@material-ui/icons/Work';
import LoginIcon from '@material-ui/icons/VpnKey';

const NavBar = (props) => {

    return(
        <header className={header.header}>
            <div className={header.container}>
                <NavLink to="/" className={header.logo}>SLICE OF HEAVEN</NavLink>
                <nav className={header.nav}>

                    <NavLink to="/menu" className={header.nav__link}>
                        <RestaurantMenuIcon/>
                        <div className={header.nav__header}>Menu</div>
                    </NavLink>

                    <NavLink to="/contact" className={header.nav__link}>
                        <PhoneInTalkIcon/>
                        <div className={header.nav__header}>Kontakt</div>
                    </NavLink>

                    <NavLink to="/vacancies" className={header.nav__link}>
                        <WorkIcon/>
                        <div className={header.nav__header}>Praca</div>
                    </NavLink>

                    <div>
                        {props.isAuth ? props.login : <NavLink to="/login" className={header.nav__link}>
                                <LoginIcon/>
                                <div>Konto</div>
                            </NavLink>}
                    </div>

                    <NavLink to="/cart" className={header.nav__link}>
                        <Badge className={header.nav__link} badgeContent={props.countCartItems} color="secondary">
                            <ShoppingCartIcon />
                            <div>Koszyk</div>
                        </Badge>
                    </NavLink>

                </nav>
            </div>
        </header>
    );
}

export default NavBar;