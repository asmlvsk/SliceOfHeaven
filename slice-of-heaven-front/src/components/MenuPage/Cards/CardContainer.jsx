import React from 'react';
import { connect } from 'react-redux';
import { setIsFetching, setAllCardsCount, setCurrentPage, setCards } from '../../../redux/card-reducer';
import axios from 'axios';
import Card from './Card';
import loader from '../../../assets/loader.svg';
import styles from './Card.module.css';

class CardContainer extends React.Component{

    componentDidMount(){
        this.props.setIsFetching(true);
        axios.get(`https://localhost:44379/Pizza?PageNumber=${this.props.currentPage}&PageSize=${this.props.pageSize}`).then(response=>{
            this.props.setIsFetching(false);
            this.props.setCards(response.data.items);
            this.props.setAllCardsCount(response.data.totalCount);
        });
    }

    onPageChanged = (pageNumber) => {
        this.props.setIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://localhost:44379/Pizza?PageNumber=${pageNumber}&PageSize=${this.props.pageSize}`).then(response=>{
            this.props.setIsFetching(false);
            this.props.setCards(response.data.items);
        });
    }

    addToCart = (product) => {
        const cartItems = this.props.cartItems.slice();
        let alreadyInCart = false;
        cartItems.forEach((item) => {
            if(item.id === product.id){
                item.count++;
                alreadyInCart = true;
            }
        });
        if(!alreadyInCart){
            cartItems.push({...product, count: 1});
        }
        this.setState({cartItems});
    }

    render(){
        return <>
        {this.props.isFetching ? <div className={styles.loaderContainer}><img className={styles.loader} src={loader}/></div> : null} 
        <Card
            cards={this.props.cards}
            cartItems={this.props.cartItems}
            totalCardsCount={this.props.totalCardsCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            addToCart={this.addToCart}
        />
    </>
    }

}

let mapStateToProps = (state) => {
    return{
        cards: state.MenuPage.cards,
        pageSize: state.MenuPage.pageSize,
        totalCardsCount: state.MenuPage.totalCardsCount,
        currentPage: state.MenuPage.currentPage,
        isFetching: state.MenuPage.isFetching,
        cartItems: state.cart.cartItems
    }
}

export default connect(mapStateToProps, {
    setCards,
    setCurrentPage,
    setAllCardsCount,
    setIsFetching
    }) (CardContainer);