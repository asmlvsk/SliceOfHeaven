import React from 'react'
import GMapsComponent from './GMapsComponent';
import mapsStyles from "./Maps.module.css";

export default function Maps() {
    return (
        <div className={mapsStyles.maps__container}>
            <div className={mapsStyles.map}>
                <div className={mapsStyles.map__title}>Bulwar Ikara</div>
                <div className={mapsStyles.map__scheme}>
                    <GMapsComponent/>
                </div>
            </div>

            <div className={mapsStyles.map}>
                <div className={mapsStyles.map__title}>Sępa-Szarzyńskiego</div>
                <div className={mapsStyles.map__scheme}>
                    <GMapsComponent/>
                </div>
            </div>
    </div>
    )
}
