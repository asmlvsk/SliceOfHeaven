import footer from "./Footer.module.css";

const Footer = (props) => {

    return(
    <footer className={footer.container}>
        <div className={footer.content}>
            <div className={footer.bi_Contact_Block}>
                <div className={footer.title}>Bulwar Ikara 27</div>
                <div className={footer.phone}>tel: 735 145 635</div>
                <div className={footer.tableBlock}>
                    <table className={footer.timeTable}>
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
            <div className={footer.ss_Contact_Block}>
                <div className={footer.title}>Sępa-Szarzyńskiego 71</div>
                <div className={footer.phone}>tel: 735 145 625</div>
                <div className={footer.tableBlock}>
                    <table className={footer.timeTable}>
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
            <div className={footer.polityka_Block}>
                <div className={footer.politykaPrywat}>Polityka Prywatności</div>
                <div className={footer.regulamin}>Regulamin</div>
            </div>
        </div>        
    </footer>

);
}

export default Footer;