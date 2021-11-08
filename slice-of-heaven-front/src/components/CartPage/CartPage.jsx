import style from "./CartPage.module.css";
import pizzaBox from '../../assets/pizza-svgrepo-com.svg'

const CartPage = (props) => {
    return(
        <div className={style.cartPage__body}>
            <div className={style.cartPage__container}>
                <div>Cart is empty</div>
                <img className={style.cartPage__box} src={pizzaBox} alt="" />
            </div>           
        </div>
    );
}

export default CartPage;