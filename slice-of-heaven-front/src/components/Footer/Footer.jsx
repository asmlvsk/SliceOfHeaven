import footerStyles from "./Footer.module.css";

const Footer = (props) => {

    return(
    <footer className={footerStyles.footer__container}>
        <div className={footerStyles.footer__content}>
            <div className={footerStyles.footer__Contact_Block}>
                <div className={footerStyles.footer__title}>Bulwar Ikara 27</div>
                <div className={footerStyles.footer__phone}>tel: 735 145 635</div>
                <div className={footerStyles.footer__tableBlock}>
                    <table className={footerStyles.footer__timeTable}>
                        <tr>
                            <th>Poniedziałek</th>
                            <th>11:00 – 03:00</th>
                        </tr>
                        <tr>
                            <th>Wtorek</th>
                            <th>11:00 – 03:00</th>
                        </tr>
                        <tr>
                            <th>Środa</th>
                            <th>11:00 – 03:00</th>
                        </tr>
                        <tr>
                            <th>Czwartek</th>
                            <th>11:00 – 03:00</th>
                        </tr>
                        <tr>
                            <th>Piątek</th>
                            <th>11:00 – 04:00</th>
                        </tr>
                        <tr>
                            <th>Sobota</th>
                            <th>11:00 – 04:00</th>
                        </tr>
                        <tr>
                            <th>Niedziela</th>
                            <th>11:00 – 04:00</th>
                        </tr>
                    </table>
                </div>

            </div>
            <div className={footerStyles.footer__Contact_Block}>
                <div className={footerStyles.footer__title}>Sępa-Szarzyńskiego 71</div>
                <div className={footerStyles.footer__phone}>tel: 735 145 625</div>
                <div className={footerStyles.footer__tableBlock}>
                    <table className={footerStyles.footer__timeTable}>
                        <tr>
                            <th>Poniedziałek</th>
                            <th>18:00 – 03:00</th>
                        </tr>
                        <tr>
                            <th>Wtorek</th>
                            <th>18:00 – 03:00</th>
                        </tr>
                        <tr>
                            <th>Środa</th>
                            <th>18:00 – 03:00</th>
                        </tr>
                        <tr>
                            <th>Czwartek</th>
                            <th>18:00 – 03:00</th>
                        </tr>
                        <tr>
                            <th>Piątek</th>
                            <th>14:00 – 06:00</th>
                        </tr>
                        <tr>
                            <th>Sobota</th>
                            <th>14:00 – 06:00</th>
                        </tr>
                        <tr>
                            <th>Niedziela</th>
                            <th>14:00 – 06:00</th>
                        </tr>
                    </table>
                </div>            
            </div>
            <div className={footerStyles.footer__politBlock}>
                <div className={footerStyles.footer__politykaPrywat}>Polityka Prywatności</div>
                <div className={footerStyles.footer__regulamin}>Regulamin</div>
            </div>
        </div>        
    </footer>

);
}

export default Footer;