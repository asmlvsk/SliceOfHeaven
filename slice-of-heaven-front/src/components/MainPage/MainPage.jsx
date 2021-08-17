import main from "./MainPage.module.css";
import NavBar from "./NavigationBar/NavBar";
import Preview from "./Preview/Preview";

const MainPage = (props) => {
    return(
        <div className={main.body}>
            <Preview/>
        </div>
    );
}

export default MainPage;