import React, {useState, useEffect} from 'react';
import CartContainer from '../../CartPage/CartContainer';
import styles from './Card.module.css';

let Card = (props) =>{

    const [cart, setCart] = useState([]);
    console.log(cart);

    let pagesCount = Math.ceil(props.totalCardsCount/props.pageSize);
        
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
        
    }
    const {cartItems} = props;
    return<div className={styles.body}>        
            
            <div className={styles.mainContent}>

                <div className={styles.items}>
                {
                    props.cards.map(t => <div key={t.id} className={styles.block}>
                            <div className={styles.main}>
                                <div className={styles.content}>{t.image}</div>
                                <div className={styles.type__img}>{t.name}</div>
                                <div className={styles.description}>{t.ingridients}</div>
                                <div className={styles.date}>Rozmiar: ok. {t.size} cm</div>
                                <div className={styles.price}>Cena: {t.price} zł</div>
                                <div className={styles.buttonContainer}>
                                    <a onClick={() => props.addToCart(t)} className={styles.button}>Wybierz</a>
                                </div>
                            </div>
                    </div>)
                }
                </div>

                <div className={styles.cartBlock}>
                    <CartContainer/>
                </div>

            </div>

            <div className={styles.pagination}>
                {pages.map(p => {
                    return <div className={props.currentPage === p && styles.selectedPage} onClick={() => {props.onPageChanged(p)}}>{p}</div>
                })}
            </div>
            
        </div>
}

export default Card;