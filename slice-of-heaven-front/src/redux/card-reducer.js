import { usersAPI } from "../api/api";

const SET_CARDS = "SET-CARDS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_CARDS_COUNT = "SET-CARDS-COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";

let initialState = {
    cards: [],
    pageSize: 6,
    totalCardsCount: 0,
    currentPage: 1,
    isFetching: false
}


const cardReducer = (state = initialState, action) =>{   
    switch(action.type){

        case SET_CARDS:{
            return {
                ...state, 
                cards: action.cards
            }
        }
        case SET_CURRENT_PAGE:{
            return {
                ...state, 
                currentPage: action.currentPage
            }
        }
        case SET_CARDS_COUNT:{
            return {
                ...state, 
                totalCardsCount: action.totalCardsCount
            }
        }
        case TOGGLE_IS_FETCHING:{
            return {
                ...state, 
                isFetching: action.isFetching
            }
        }
        default:
            return state;
    }
}


export const setCards = (cards) =>({type: SET_CARDS, cards})
export const setCurrentPage = (currentPage) =>({type: SET_CURRENT_PAGE, currentPage})
export const setAllCardsCount = (totalCardsCount) =>({type: SET_CARDS_COUNT, totalCardsCount})
export const setIsFetching = (isFetching) =>({type: TOGGLE_IS_FETCHING, isFetching})

export const getPages = (currentPage, pageSize) =>{
    return (dispatch) =>{
        dispatch(setIsFetching(true));

        usersAPI.getPage(currentPage, pageSize).then(data=>{
            dispatch(setIsFetching(false));
            dispatch(setCards(data.items));
            dispatch(setAllCardsCount(data.totalCount));
    });
    }

}

export default cardReducer;