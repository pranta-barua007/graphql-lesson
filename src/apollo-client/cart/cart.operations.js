import { cartHiddenVar, cartItemsVar } from "./cart.var"
import { addItem } from "./cart.utils";

export const toggleCartHidden = () => {
    const hidden = cartHiddenVar();
    cartHiddenVar(!hidden);
    return !hidden;
};

export const addItemToCart = (item) => {
    const cartItems  = cartItemsVar();
    const newCartItems = addItem(cartItems, item);
    cartItemsVar(newCartItems);
    return newCartItems;
};