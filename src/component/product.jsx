/*Activity class 2*/

import QuantityPicker from "./quantityPicker";
import "./product.css"
import { useEffect, useState, useContext} from "react";
import { Toast } from "bootstrap";
import globalContext from "../state/globalContext";

function Product(props) {

    const [quantity, setQuantity] = useState(1);

    //Use useContext
    const addToCart = useContext(globalContext).addToCart;

    useEffect(function () {
        console.log("Hey, I am a product!");
    }, []);

    function onQuantityChange(qty) {
        console.log("New value: " + qty);
        setQuantity(qty);
    }

    function getTotal() {
        let total = props.data.price * quantity;
        return total.toFixed(2);
    }

    function handleAddClick(){
        console.log("Adding to cart");

        /**
         * create a new object called prodOfCart
         * should be a copy of props.data
         * and you should add quantity to the new object
         * log the new object
         */

        let prodForCart = {...props.data};
        prodForCart.quantity = quantity;
        //console.log(prodForCart);

        /**
         * This is the function that we create in the global provider.
         * Here is where gets the products.
         */
        addToCart(prodForCart);
    }

    return (
        <div className="product">
            <h5>{props.data.title}</h5>

            <img className="image-product" src={props.data.image} alt="" />

            <div className="prices">
                <label>Price <span>${props.data.price.toFixed(2)}</span></label>
                <label>Total <span>${getTotal()}</span></label>
            </div>

            <div className="controls">
                <QuantityPicker onChange={onQuantityChange}></QuantityPicker>

                <button onClick={handleAddClick} className="add-btn">Add</button>
            </div>

        </div>
    );
}

export default Product;