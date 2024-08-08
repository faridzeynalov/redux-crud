import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";

const Header = () => {

  return (
    <header>
      <div className="container">
        <ul>
            <li>
                <Link to="/">Categories</Link>
            </li>
            {/* <li>
                <Link to="/rtk-query">Categories (RTK Query)</Link>
            </li> */}
            <li>
                <Link to="/add-product">Add category</Link>
            </li>
            <li>
                <Link to="/fav">Favorites <sup>0</sup></Link>
            </li>
            <li>
                <Link to="/basket">Basket <sup>0</sup></Link>
            </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
