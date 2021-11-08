import React, {useState, useEffect} from 'react';
import CartContainer from '../../CartPage/CartModule/CartContainer';
import NavBarContainer from '../../MainPage/NavigationBar/NavBarContainer';
import cardStyles from './Card.module.css';
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

    return<div className={cardStyles.card__body}>        
            <InfiniteScroll
                dataLength={cards.length}
                next={fetchMore}
                hasMore={true}>
                <div className={cardStyles.card__mainContent}>

                    <div className={cardStyles.card__items}>
                    {
                        cards.map(t => <div key={t.id} className={cardStyles.card__block}>
                            <img src={t.image} className={cardStyles.card__content} alt="Pizza Img"></img>
                                <div className={cardStyles.card__main}>
                                    <div className={cardStyles.card__typeTitle}>{t.name}</div>
                                    <div className={cardStyles.card__description}>{t.ingridients}</div>
                                    <div className={cardStyles.card__date}>Rozmiar: ok. {t.size} cm</div>                               
                                    <div className={cardStyles.card__buttonContainer}>
                                        <div onClick={() => onAddToCart(t)} className={cardStyles.card__button}>Wybierz</div>
                                        <div className={cardStyles.card__price}>{t.price} zł</div>
                                    </div>
                                </div>
                        </div>)
                    }
                    </div>

                    <div className={cardStyles.card__cartBlock}>
                        <CartContainer cartItems={cartItems} onAdd={onAddToCart} onRemove={onRemoveFromCart}/>
                    </div>

                    <NavBarContainer countCartItems={cartItems.length} />
                </div>
            </InfiniteScroll>
            
        </div>
}

export default Card;