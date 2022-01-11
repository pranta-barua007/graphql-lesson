import { cartHiddenVar, cartItemsVar, cartItemCountVar } from "./cart.var"
import { addItem, getCartItemCount } from "./cart.utils";

export const toggleCartHidden = () => {
    const hidden = cartHiddenVar(); //getting the value
    cartHiddenVar(!hidden); //setting the value
};

export const addItemToCart = (item) => {
    const cartItems  = cartItemsVar();
    const newCartItems = addItem(cartItems, item);
    const cartItemCount = getCartItemCount(newCartItems);
    cartItemCountVar(cartItemCount);
    cartItemsVar(newCartItems);
};