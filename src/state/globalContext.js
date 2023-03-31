//1. Create a Context
import { createContext } from "react";

const globalContext = createContext({
    /**
     * What do we need in the context
     * How is the object
     * 
     * The context should describe thwe data to be held in the context storage
     * it is just a description, NO IMPLEMENTATION HERE!
     */

    cart: [], //an array
    user: {}, //an object

    getTotalToPay: () => {},
    getNumOfProducts: () => {},
    addToCart: () => {},
    removeFromCart: () => {}
});

//Note: A file only can export one thing as default
export default globalContext;
// end of the context

