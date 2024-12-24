import logoImage from "../../assets/logo/tastyLogo.png"
import SearchBar from "../searchBar/SearchBar";
import "./Header.css"

const Header: React.FC = () => {
    return ( 
        <div className="header">
            <div className="logo-con">
                <img src={logoImage} alt="Tasty Logo" />
            </div>
            <h2>Find a recipe, an idea, an inspiration...</h2>
            <SearchBar />
        </div>
    );
}

export default Header;