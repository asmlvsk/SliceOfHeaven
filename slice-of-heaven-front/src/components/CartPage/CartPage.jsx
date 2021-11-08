import style from "./CartPage.module.css";
import pizzaBox from '../../assets/pizza-svgrepo-com.svg'

const CartPage = (props) => {
    return(
        <div className={style.body}>
            <div className={style.container}>
                <div>Cart is empty</div>
                <img className={style.box} src={pizzaBox} alt="" />
            </div>           
        </div>
    );
}

export default CartPage;