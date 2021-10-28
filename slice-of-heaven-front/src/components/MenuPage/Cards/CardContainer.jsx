import React from 'react';
import { connect } from 'react-redux';
import { setCurrentPage, getPages} from '../../../redux/card-reducer';
import Card from './Card';
import loader from '../../../assets/loader.svg';
import styles from './Card.module.css';

class CardContainer extends React.Component{

    componentDidMount(){
        this.props.getPages(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getPages(pageNumber, this.props.pageSize);
    }

    render(){
        return <>
        {this.props.isFetching ? <div className={styles.loaderContainer}><img className={styles.loader} src={loader} alt="Loading..."/></div> : null} 
        <Card
            cards={this.props.cards}
            cartItems={this.props.cartItems}
            totalCardsCount={this.props.totalCardsCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
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
        isFetching: state.MenuPage.isFetching
    }
}

export default connect(mapStateToProps, {setCurrentPage, getPages}) (CardContainer);