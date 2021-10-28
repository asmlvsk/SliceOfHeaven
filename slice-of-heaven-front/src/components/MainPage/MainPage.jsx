import AboutUs from "./AboutUs/AboutUs";
import main from "./MainPage.module.css";
import Preview from "./Preview/Preview";

const MainPage = (props) => {
    return(
        <div className={main.body}>
            <Preview/>
            <AboutUs/>
        </div>
    );
}

export default MainPage;