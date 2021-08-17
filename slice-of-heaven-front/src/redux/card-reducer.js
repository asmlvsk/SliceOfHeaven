const READ_MORE = "READ-MORE";
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

        case READ_MORE:

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


export const readMore = () =>({type: READ_MORE})
export const setCards = (cards) =>({type: SET_CARDS, cards})
export const setCurrentPage = (currentPage) =>({type: SET_CURRENT_PAGE, currentPage})
export const setAllCardsCount = (totalCardsCount) =>({type: SET_CARDS_COUNT, totalCardsCount})
export const setIsFetching = (isFetching) =>({type: TOGGLE_IS_FETCHING, isFetching})

export default cardReducer;