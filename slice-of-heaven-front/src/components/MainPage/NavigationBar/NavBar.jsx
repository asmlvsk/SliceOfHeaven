import { NavLink } from "react-router-dom";
import headerStyles from "./NavBar.module.css";
import Badge from '@material-ui/core/Badge';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCartRounded';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import WorkIcon from '@material-ui/icons/Work';
import LoginIcon from '@material-ui/icons/VpnKey';

const NavBar = (props) => {

    return(
        <header className={headerStyles.header}>
            <div className={headerStyles.header__container}>
                <NavLink to="/" className={headerStyles.header__logo}>SLICE OF HEAVEN</NavLink>
                <nav className={headerStyles.header__nav}>

                    <NavLink to="/menu" className={headerStyles.header__nav_link}>
                        <RestaurantMenuIcon/>
                        <div className={headerStyles.header__nav_item}>Menu</div>
                    </NavLink>

                    <NavLink to="/contact" className={headerStyles.header__nav_link}>
                        <PhoneInTalkIcon/>
                        <div className={headerStyles.header__nav_item}>Kontakt</div>
                    </NavLink>

                    <NavLink to="/vacancies" className={headerStyles.header__nav_link}>
                        <WorkIcon/>
                        <div className={headerStyles.header__nav_item}>Praca</div>
                    </NavLink>

                    <div>
                        {props.isAuth ? props.login : <NavLink to="/login" className={headerStyles.header__nav_link}>
                                <LoginIcon/>
                                <div>Konto</div>
                            </NavLink>}
                    </div>

                    <NavLink to="/cart" className={headerStyles.header__nav_link}>
                        <Badge className={headerStyles.header__nav_link} badgeContent={props.countCartItems} color="secondary">
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