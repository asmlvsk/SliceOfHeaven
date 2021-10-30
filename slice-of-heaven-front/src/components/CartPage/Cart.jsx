import style from "./Cart.module.css";

const Cart = (props) => {
    const itemsPrice = props.cartItems.reduce((a, c) => a + c.price * c.qty, 0);
    return(
        <div className={style.body}>
            <div className={style.container}>
                <div className={style.title}>Koszyk</div>
                <div className={style.mainDash}></div>
                <div>{props.cartItems.length === 0 && <div className={style.emtyCart}>Koszyk jest pusty.</div>}</div>
                {props.cartItems.map((item) => (
                    <div key={item.id} className={style.itemsBody}>
                        <img src={item.image} className={style.itemsPic} alt="Pizza pic"></img>
                        <div className={style.itemsName}>{item.name}</div>
                        <div className={style.itemsBtns}>
                            <button onClick={() => props.onAdd(item)} className={style.itemsAdd}>+</button>
                            <div>{item.qty}</div>
                            <button onClick={() => props.onRemove(item)} className={style.itemsRemove}>-</button>
                        </div>
                        <div className={style.itemsQty}>{item.price.toFixed(2)} zł</div> 
                        <div className={style.dash}></div>
                    </div>
                ))}
                {props.cartItems.length !== 0 && (
                    <>
                        <div>Do zapłaty:</div>
                        <div className={style.itemsPrice}>{itemsPrice.toFixed(2)} zł</div>

                        <button onClick={() => alert("Checkout Implementation")} className={style.checkoutBtn}>Checkout</button>
                    </>
                )}
            </div>
        </div>
    );
}

export default Cart;