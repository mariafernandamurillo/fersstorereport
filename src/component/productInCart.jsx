import "./productInCart.css"
import { useState } from "react";

//Receive the prod from cart component
function ProductInCart(prod) {
    
    function getTotal() {
        let total = prod.data.price * prod.data.quantity;
        return total.toFixed(2);
    }
    
    return (
        <div className="ProductInCart">
            <div className="parent">


                <div className="a-product-in-cart">

                    <div className="product-image">
                        <img className="image-product" src={prod.data.image} alt="image" />
                    </div>

                    <div className="product-data">
                        <div className="product-name">
                            <h3>{prod.data.title}</h3>
                        </div>

                        <div className="product-info">
                            <label>Price: <span>$ {prod.data.price}</span></label>
                            <label>Units: <span> {prod.data.quantity}</span></label>
                            <label>Total: <span>$ {getTotal()}</span></label>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductInCart;