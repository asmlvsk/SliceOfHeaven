import styles from "./Contact.module.css";
import GMapsComponent from "./GMapsComponent";

const Contact = (props) => {
    return(
        <div className={styles.body}>

            <div className={styles.contact__container}>
                <div className={styles.contact__inputs}>
                    <input placeholder="Imię" className={styles.contact__name}/>
                    <input placeholder="Telefon" className={styles.contact__phone}/>
                    <input placeholder="Email" className={styles.contact__email}/>
                    <textarea placeholder="Wiadomość" className={styles.contact__text}></textarea>
                    <button className={styles.contact__button}>Wyślij wiadomość</button>
                </div>

                <div className={styles.contact__timeTables}>
                    <div className={styles.contact__tableBlock}>
                        <div className={styles.contact__timetable_title}>Bulwar Ikara</div>
                        <div className={styles.contact__timetable_phone}>tel: 735 145 635</div>
                        <table className={styles.contact__timeTable}>
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
                    <div className={styles.contact__timeTable}>
                        <div className={styles.contact__tableBlock}>
                            <div className={styles.contact__timetable_title}>Sępa-Szarzyńskiego</div>
                            <div className={styles.contact__timetable_phone}>tel: 735 145 625, 71 737 44 44</div>
                            <table>
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
                </div>
            </div>

            <div className={styles.maps__container}>
                <div className={styles.map}>
                    <div className={styles.map__title}>Bulwar Ikara</div>
                    <div className={styles.map__scheme}>
                        <GMapsComponent/>
                    </div>
                </div>

                <div className={styles.map}>
                    <div className={styles.map__title}>Sępa-Szarzyńskiego</div>
                    <div className={styles.map__scheme}>
                        <GMapsComponent/>
                    </div>
                </div>
            </div>


        </div>
    );
}
export default Contact;