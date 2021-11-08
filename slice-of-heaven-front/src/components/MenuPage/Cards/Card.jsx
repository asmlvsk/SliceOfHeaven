import React, {useState, useEffect} from 'react';
import CartContainer from '../../CartPage/CartModule/CartContainer';
import NavBarContainer from '../../MainPage/NavigationBar/NavBarContainer';
import styles from './Card.module.css';
import InfiniteScroll from 'react-infinite-scroll-component';

import db from '../../../api/firestore';
import { collection, limit, onSnapshot, orderBy, query, startAfter } from '@firebase/firestore';

let Card = (props) =>{

    const [cards, setCards] = useState([]);
    const [lastCards, setLastCards] = useState();

    useEffect(() => {
        const q = query(collection(db, "pizzas"), limit(6), orderBy("id", "asc"));

        const unsub = onSnapshot(q, (snapshot)=>{
            setCards(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})));
            setLastCards(snapshot.docs[snapshot.docs.length - 1]);
        });
        return unsub;
    }, []);

    const fetchMore = () =>{
        const q = query(collection(db, "pizzas"), orderBy("id", "asc"), startAfter(lastCards), limit(6));

        const unsub = onSnapshot(q, (snapshot)=>{
            const card = snapshot.docs.map((doc) => ({...doc.data(), id: doc.id}));
            const lastCard = snapshot.docs[snapshot.docs.length - 1];
            setCards(listOfCards => [...listOfCards, ...card]);
            setLastCards(lastCard);
        });
        return unsub;
    }

    const [cartItems, setCartItems] = useState([]);

    // let pagesCount = Math.ceil(props.totalCardsCount/props.pageSize);
        
    // let pages = [];
    // for (let i = 1; i <= pagesCount; i++) {
    //     pages.push(i);
        
    // }

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
            <InfiniteScroll
                dataLength={cards.length}
                next={fetchMore}
                hasMore={true}>
                <div className={styles.mainContent}>

                    <div className={styles.items}>
                    {
                        cards.map(t => <div key={t.id} className={styles.block}>
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
            </InfiniteScroll>
            
        </div>
}

export default Card;