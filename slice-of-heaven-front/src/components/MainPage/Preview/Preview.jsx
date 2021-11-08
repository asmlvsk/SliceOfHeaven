import previewStyles from "./Preview.module.css";
import video from "../../../assets/soh.mp4";

const Preview = () => {
    return(
    <div className={previewStyles.home}>

        <video autoPlay={true} muted loop className={previewStyles.home__backgroundVid}>
            <source src={video} type="video/mp4"/>
        </video>

        <div className={previewStyles.home__container}>

            <div className={previewStyles.home__inner}>
                <h2 className={previewStyles.home__suptitle}>Zamów już TERAZ!</h2>
                <h1 className={previewStyles.home__title}>SLICE OF HEAVEN</h1>
            </div>

        </div>
    
    </div>
    );
}

export default Preview;