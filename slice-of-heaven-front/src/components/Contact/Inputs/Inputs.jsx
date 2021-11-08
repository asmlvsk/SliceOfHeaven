import React from 'react'
import timeTableStyles from "./Inputs.module.css";

export default function Inputs() {
    return (
        <div className={timeTableStyles.contact__inputs}>
            <input placeholder="Imię" className={timeTableStyles.contact__inputs_name}/>
            <input placeholder="Telefon" className={timeTableStyles.contact__inputs_phone}/>
            <input placeholder="Email" className={timeTableStyles.contact__inputs_email}/>
            <textarea placeholder="Wiadomość" className={timeTableStyles.contact__inputs_text}></textarea>
            <button className={timeTableStyles.contact__inputs_button}>Wyślij wiadomość</button>
        </div>
    )
}
