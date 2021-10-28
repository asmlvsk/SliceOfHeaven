import { NavLink } from "react-router-dom";
import header from "./NavBar.module.css";
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCartRounded';

const NavBar = (props) => {

    return(
        <header className={header.header}z>
            <div className={header.container}>
                <div className={header.inner}>
                    <NavLink to="/" className={header.logo}>SLICE OF HEAVEN</NavLink>
                    <nav className={header.nav}>
                        <NavLink to="/menu" className={header.nav__link}>Menu</NavLink>
                        <NavLink to="/contact" className={header.nav__link}>Contact</NavLink>
                        <NavLink to="/praca" className={header.nav__link}>Praca</NavLink>
                        <div className={header.nav__link}>
                            {props.isAuth ? props.login : <NavLink to="/login">Konto</NavLink>}
                        </div>
                        <NavLink to="/cart" className={header.nav__link}>
                            <Badge badgeContent={props.countCartItems} color="secondary">
                                <ShoppingCartIcon />
                            </Badge>
                        </NavLink>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default NavBar;