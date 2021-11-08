import styles from "./Contact.module.css";
import Inputs from "./Inputs/Inputs";
import Maps from "./Maps/Maps";
import TimeTable from "./TimeTable/TimeTable";


const Contact = () => {
    return(
        <div className={styles.body}>

            <div className={styles.contact__container}>
                <Inputs/>
                <TimeTable/>
            </div>
            <Maps/>

        </div>
    );
}
export default Contact;