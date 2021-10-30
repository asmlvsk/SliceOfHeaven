import React, {useState} from 'react';
import CartContainer from '../../CartPage/CartContainer';
import NavBarContainer from '../../MainPage/NavigationBar/NavBarContainer';
import styles from './Card.module.css';

let Card = (props) =>{

    const [cartItems, setCartItems] = useState([]);
    //console.log(cart);

    let pagesCount = Math.ceil(props.totalCardsCount/props.pageSize);
        
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
        
    }

    const onAddToCart = (product) =>{
        const exists = cartItems.find(x => x.id === product.id);
        if(exists){
            setCartItems(cartItems.map(x => x.id === product.id ? {...exists, qty: exists.qty + 1} : x));
        }
        else{
            setCartItems([...cartItems, {...product, qty: 1}]);
        }
    }

    const onRemoveFromCart = (product) =>{
        const exists = cartItems.find(x => x.id === product.id);
        if(exists.qty === 1){
            setCartItems(cartItems.filter((x) => x.id !== product.id))
        }
        else{
            setCartItems(cartItems.map(x => x.id === product.id ? {...exists, qty: exists.qty - 1} : x));
        }
    }

    return<div className={styles.body}>        
            
            <div className={styles.mainContent}>

                <div className={styles.items}>
                {
                    props.cards.map(t => <div key={t.id} className={styles.block}>
                        <img src={t.image} className={styles.content} alt="Pizza Img"></img>
                            <div className={styles.main}>
                                <div className={styles.type__title}>{t.name}</div>
                                <div className={styles.description}>{t.ingridients}</div>
                                <div className={styles.date}>Rozmiar: ok. {t.size} cm</div>                               
                                <div className={styles.buttonContainer}>
                                    <div onClick={() => onAddToCart(t)} className={styles.button}>Wybierz</div>
                                    <div className={styles.price}>{t.price} zł</div>
                                </div>
                            </div>
                    </div>)
                }
                </div>

                <div className={styles.cartBlock}>
                    <CartContainer cartItems={cartItems} onAdd={onAddToCart} onRemove={onRemoveFromCart}/>
                </div>

                <NavBarContainer countCartItems={cartItems.length} />
            </div>

            <div className={styles.pagination}>
                {pages.map(p => {
                    return <div className={props.currentPage === p && styles.selectedPage} onClick={() => {props.onPageChanged(p)}}>{p}</div>
                })}
            </div>
            
        </div>
}

export default Card;