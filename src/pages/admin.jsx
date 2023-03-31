import "./admin.css"

import { useState } from "react";
import { getByTitle } from "@testing-library/react";

function Admin() {

    //cont [getByTitle, setTitle] = useState(""); 
    /*We are getting an string */

    const [product, setProduct] = useState({});
    /*We do not need an string, we need an object {}*/

    const [discount, setDiscount] = useState({});


    function handleTextChange(e) {
        console.log("changed: ", e.target.value);
        /*Similar to a Document.getElementById().value;*/

        //setTitle(e.target.value);
        /*Everytime the text changes, I want to set
        the value of the input */

        /*That is for one field, but we need it for
        all the inputs*/
        const value = e.target.value; //the value of the input
        const name = e.target.name; //the "id" of the input

        let copy = { ...product };
        copy[name] = value;
        setProduct(copy);
    }

    function saveProduct() {
        console.log(product);
    }

    function handleDiscountText(e){
        const value = e.target.value; //the value of the input
        const name = e.target.name; //the "id" of the input

        let copy = { ...discount };
        copy[name] = value;
        setDiscount(copy);
    }

    function saveDiscount() {
        console.log(discount);
    }

    return (
        <div className="Admin">
            <h1>Welcome, Admin!</h1>
            <div className="forms">
                <form className="form-new-product">
                    <label className="lbl-subtitle">New product</label>

                    <div className="product-name-content product-attribute">
                        <label>Name </label>
                        <input name="title" onChange={handleTextChange} className="ip-product-name ip-text" type="text" />
                    </div>

                    <div className="product-category-content product-attribute">
                        <label>Category </label>
                        <input name="category" onChange={handleTextChange} className="ip-category-name ip-text" type="text" />
                    </div>

                    <div className="product-price-content product-attribute">
                        <label>Price </label>
                        <input name="price" onChange={handleTextChange} className="ip-price-name ip-text" type="text" />
                    </div>

                    <div className="product-image-content product-attribute">
                        <label>Image </label>
                        <input name="image" onChange={handleTextChange} className="ip-image-name ip-text" type="text" />
                    </div>
                    <div className="btn-save">
                        <button className="btn-primary" type="button" onClick={saveProduct}>Save Product</button>
                    </div>
                </form>

                <form className="form-new-discount">
                    <label className="lbl-subtitle">New discount</label>
                    <div className="product-attribute">
                        <label>Code </label>
                        <input name="code" onChange={handleDiscountText} className="ip-text" type="text" />
                    </div>

                    <div className="product-attribute">
                        <label>Discount </label>
                        <input name="discount" onChange={handleDiscountText} className="ip-text" type="text" />
                    </div>

                    <div className="btn-save">
                        <button className="btn-primary" type="button" onClick={saveDiscount}>Save Coupon</button>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default Admin;