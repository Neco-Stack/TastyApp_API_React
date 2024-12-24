import "./header.css";
import logoImage from "../../assets/logo/tastyLogo.png"
import SearchBar from "../searchBar/SearchBar";

const Header: React.FC = () => {
    return ( 
        <div className="header">
            <div className="logo-con">
                <img src={logoImage} alt="Tasty Logo" />
            </div>
            <h2>Find a recipe, an idea, an inspiration...</h2>
            <div className="search-button">
                <SearchBar />
            </div>
        </div>
    );
}

export default Header;