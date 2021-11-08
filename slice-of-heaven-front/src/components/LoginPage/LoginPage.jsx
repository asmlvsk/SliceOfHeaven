import React from 'react';
import loginStyles from './LoginPage.module.css';

const VacancyPage = () =>{

    return<div className={loginStyles.login__body}>
        <div className={loginStyles.login__title}>Logowanie do strony</div>
        <div className={loginStyles.login__container}>
            <form className={loginStyles.login__loginForm}>
                <input placeholder="E-mail" className={loginStyles.login__input} type="email" />
                <input placeholder="Password" className={loginStyles.login__input} type="password" />
                <button className={loginStyles.login__loginBtn}>Zaloguj Sie</button>
            </form>
            <div className={loginStyles.login__preview}>
                <div className={loginStyles.login__previewTitle}>Zapraszamy do SLICE OF HEAVEN!</div>
            </div>
        </div>    
    </div>

}

export default VacancyPage;