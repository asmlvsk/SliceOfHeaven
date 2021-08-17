import main from "./Preview.module.css";

const Preview = () => {
    return(
    <div className={main.home}>
        <div className={main.container}>
    
            <div className={main.home__inner}>
                <h2 className={main.home__suptitle}>Zamów już TERAZ!</h2>
                <h1 className={main.home__title}>SLICE OF HEAVEN</h1>
            </div>

        </div>
    </div>
    );
}

export default Preview;