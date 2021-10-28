import { usersAPI } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) =>{   
    switch(action.type){
        case SET_USER_DATA:{
            return {
                ...state, 
                ...action.data,
                isAuth: true
            }
        }
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login) =>({type: SET_USER_DATA, data: {userId, email, login}})

export const getLogin = () =>{
    return (dispatch) =>{
        usersAPI.getUser().then(response=>{
            if(response.data.resultCode === 0){
                let {userId, login, email} = response.data.data;
                dispatch(setAuthUserData(userId, email, login));
            }
        });
    }
}

export default authReducer;