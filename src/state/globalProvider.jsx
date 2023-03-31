//2. Create the provider (which is a component)
import { Provider } from "react";
import GlobalContext from "./globalContext";
import { useState } from "react";

function GlobalProvider(props) {
    const [cart, setCart] = useState([]);
    const [user, setUser] = useState({ name: "Fernanda", id: 1808 });

    function getNumOfProducts() {
        let total = 0;

        for (let i = 0; i < cart.length; i++) {
            let prod = cart[i];
            total += prod.quantity;
        }
        return total;
    }

    function getTotalToPay(){
        let totalToPay = 0;
        const cartSize = cart.length;

        for(let i=0; i <cartSize; i++){
            let prodPrice = cart[i];
            totalToPay += (prodPrice.price * prodPrice.quantity);
        }

        return totalToPay;
    }

    
    function addToCart(prod) {
        let copy = [...cart];
        const copySize = copy.length;
        let newProd = true;

        for (let i = 0; i < copySize; i++) {
            if (copy[i].title == prod.title) {
                copy[i].quantity += prod.quantity;
                newProd = false;
            }
        }

        if(newProd){
            copy.push(prod);
        }
       
        setCart(copy);

        //console.log(copy);
    }


    function removeFromCart() {
        console.log("global remove");
    }

    return <GlobalContext.Provider value={{
        cart: cart,
        user: user,
        getTotalToPay, getTotalToPay,
        getNumOfProducts, getNumOfProducts,
        addToCart: addToCart,
        removeFromCart: removeFromCart,
    }}>{props.children}</GlobalContext.Provider>;
    //Children is a reserved word
}
export default GlobalProvider;