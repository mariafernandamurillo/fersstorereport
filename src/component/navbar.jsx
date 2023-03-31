import { Link } from "react-router-dom";
import "./navbar.css"
import { useContext } from "react";
import globalContext from "../state/globalContext";


function Navbar() {

    /*
     * This function is created in the global provider.
     */
    const getNumberOfProducts = useContext(globalContext).getNumOfProducts;

    return <div className="nav-bar">
        <div className="top">
            <img className='logo' src="./images/fs-logo.png" alt="" />
            <label className="Fernanda">Fernanda's</label>
            <label className="online-store">online store</label>
        </div>

        <nav>
            {/*a tags make a refresh and that make us to lose data. In React we do not 
            want to use these tags*/}
            <Link to={"/"}>Home</Link>
            <Link to={"/catalog"}> Catalog</Link>
            <Link to={"/about"}> About</Link>
            <Link to={"/cart"} className="cart"><i class="fa fa-shopping-cart" aria-hidden="true"></i>
            <sup className="qt-products">{getNumberOfProducts()}</sup>
            </Link>
            <Link to={"/admin"}> Admin</Link>
        </nav>

        <div className="search">
            <input className="search-box" placeholder="Find a bag"></input>
            <button className="search-btn">Search</button>
        </div>
    </div>;
}

export default Navbar;

/*<div className="dropdown">
                <button>Option 2.0</button>
                <div className="dropdown-content">
                    <Link to={}>href="">Option 2.1</Link>
                    <Link to={}>href="">Option 2.2</Link>
                    <Link to={}>href="">Option 2.3</Link>
                </div>
            </div>
            <div className="dropdown">
                <button>Option 3.0</button>
                <div className="dropdown-content">
                    <Link to={}>href="">Option 3.1</Link>
                    <Link to={}>href="">Option 3.2</Link>
                    <Link to={}>href="">Option 3.3</Link>
                </div>
            </div>*/