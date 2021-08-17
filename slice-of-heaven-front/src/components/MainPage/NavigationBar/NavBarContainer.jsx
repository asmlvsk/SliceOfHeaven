import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { setAuthUserData } from "../../../redux/auth-reducer";
import NavBar from "./NavBar";

class NavBarContainer extends React.Component {

    componentDidMount(){
        //this.props.setIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true}).then(response=>{
            if(response.data.resultCode === 0){
                let {userId, login, email} = response.data.data;
                this.props.setAuthUserData(userId, email, login);
            }
        });
    }

    render(){
        return<NavBar {...this.props}/>
    }
}

const mapStateToProps = (state) =>({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

export default connect(mapStateToProps, {setAuthUserData})(NavBarContainer);