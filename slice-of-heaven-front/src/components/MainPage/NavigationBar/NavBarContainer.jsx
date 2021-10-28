import React from "react";
import { connect } from "react-redux";
import { setAuthUserData, getLogin } from "../../../redux/auth-reducer";
import NavBar from "./NavBar";

class NavBarContainer extends React.Component {

    componentDidMount(){
        this.props.getLogin();
    }

    render(){
        return<NavBar countCartItems={this.props.countCartItems} {...this.props}/>
    }
}

const mapStateToProps = (state) =>({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

export default connect(mapStateToProps, {setAuthUserData, getLogin})(NavBarContainer);