import { cartHiddenVar, cartItemsVar } from "./cart.var"
import { addItem } from "./cart.utils";

export const toggleCartHidden = () => {
    const hidden = cartHiddenVar();
    cartHiddenVar(!hidden);
    return !hidden;
};

export const addItemToCart = (item) => { //TODO: Functionality not working
    const cartItems  = cartItemsVar();
    console.log({cartItems});
    const newCartItems = addItem(cartItems, item);
    cartItemsVar(newCartItems);
    return newCartItems;
};