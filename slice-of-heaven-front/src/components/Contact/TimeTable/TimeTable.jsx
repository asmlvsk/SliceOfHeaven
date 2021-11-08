import React from 'react'
import ttStyles from "./TimeTable.module.css";

export default function TimeTable() {
    return (
        <div className={ttStyles.contact__timeTables}>
            <div className={ttStyles.contact__tableBlock}>
                <div className={ttStyles.contact__timetable_title}>Bulwar Ikara</div>
                <div className={ttStyles.contact__timetable_phone}>tel: 735 145 635</div>
                <table className={ttStyles.contact__timeTable}>
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
            <div className={ttStyles.contact__timeTable}>
                <div className={ttStyles.contact__tableBlock}>
                    <div className={ttStyles.contact__timetable_title}>Sępa-Szarzyńskiego</div>
                    <div className={ttStyles.contact__timetable_phone}>tel: 735 145 625, 71 737 44 44</div>
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

)
}
