import style from "./Cart.module.css";

const Cart = (props) => {
    const itemsPrice = props.cartItems.reduce((a, c) => a + c.price * c.qty, 0);
    return(
        <div className={style.cart__body}>
            <div className={style.cart__container}>
                <div className={style.cart__title}>Koszyk</div>
                <div className={style.cart__dash}></div>
                <div>{props.cartItems.length === 0 && <div className={style.cart__emtyStatus}>Koszyk jest pusty.</div>}</div>
                {props.cartItems.map((item) => (
                    <div key={item.id} className={style.cart__items_Body}>
                        <img src={item.image} className={style.cart__items_Pic} alt="Pizza pic"></img>
                        <div className={style.cart__items_Name}>{item.name}</div>
                        <div className={style.cart__items_Btns}>
                            <button onClick={() => props.onAdd(item)} className={style.cart__items_Add}>+</button>
                            <div>{item.qty}</div>
                            <button onClick={() => props.onRemove(item)} className={style.cart__items_Remove}>-</button>
                        </div>
                        <div className={style.cart__items_Qty}>{item.price.toFixed(2)} zł</div> 
                        <div className={style.cart__dash}></div>
                    </div>
                ))}
                {props.cartItems.length !== 0 && (
                    <>
                        <div>Do zapłaty:</div>
                        <div className={style.cart__items_Price}>{itemsPrice.toFixed(2)} zł</div>

                        <button onClick={() => alert("Checkout Implementation")} className={style.cart__checkoutBtn}>Checkout</button>
                    </>
                )}
            </div>
        </div>
    );
}

export default Cart;