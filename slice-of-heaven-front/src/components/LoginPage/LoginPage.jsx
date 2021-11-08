import React from 'react';
import styles from './LoginPage.module.css';

const VacancyPage = (props) =>{

    return<div className={styles.body}>
        <div className={styles.title}>Logowanie do strony</div>
        <div className={styles.container}>
            <form className={styles.loginForm}>
                <input placeholder="E-mail" className={styles.input} type="email" />
                <input placeholder="Password" className={styles.input} type="password" />
                <button className={styles.loginBtn}>Zaloguj Sie</button>
            </form>
            <div className={styles.preview}>
                <div className={styles.previewTitle}>Zapraszamy do SLICE OF HEAVEN!</div>
            </div>
            {/* <form className={styles.loginForm}>
                <input placeholder="E-mail" className={styles.input} type="email" />
                <input placeholder="Repeat E-mail" className={styles.input} type="email" />
                <input placeholder="Password" className={styles.input} type="password" />
                <input placeholder="Repeat Password" className={styles.input} type="password" />
                <button>Zarejestruj Sie</button>
            </form> */}
        </div>    
    </div>

}

export default VacancyPage;